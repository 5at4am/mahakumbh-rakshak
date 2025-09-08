import streamlit as st
import cv2
import numpy as np
import face_recognition
from typing import Tuple
from db_utils import Database

db = Database()


def validate_aadhar(raw: str) -> Tuple[bool, str]:
    num = raw.replace(" ", "")
    if len(num) != 12 or not num.isdigit():
        return False, "Aadhar must be exactly 12 digits."
    formatted = " ".join([num[i: i + 4] for i in range(0, 12, 4)])
    return True, formatted


def validate_phone(raw: str) -> Tuple[bool, str]:
    if len(raw) == 10 and raw.isdigit():
        return True, raw
    return False, "Phone number must be 10 digits."


def register_page():
    st.header("📝 Register Person")

    # Input fields
    aadhar = st.text_input("Aadhar Number (12 digits)")
    name = st.text_input("Full Name")
    gender = st.selectbox("Gender", ["", "Male", "Female", "Other"])
    phone = st.text_input("Phone Number (10 digits)")

    # Session state
    if "camera_open" not in st.session_state:
        st.session_state.camera_open = False
    if "face_encoding" not in st.session_state:
        st.session_state.face_encoding = None
    if "face_preview" not in st.session_state:
        st.session_state.face_preview = None

    # Button to open camera
    if not st.session_state.camera_open:
        if st.button("📷 Capture Face"):
            st.session_state.camera_open = True
            st.rerun()

    # Show camera only when requested
    if st.session_state.camera_open:
        face_image = st.camera_input("Take a clear picture")

        if face_image:
            file_bytes = np.asarray(bytearray(face_image.getbuffer()), dtype=np.uint8)
            img = cv2.imdecode(file_bytes, 1)
            rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

            # Detect faces
            face_locations = face_recognition.face_locations(rgb)
            encodings = face_recognition.face_encodings(rgb, face_locations)

            if face_locations and encodings:
                st.session_state.face_encoding = encodings[0]

                # Draw box around face
                for (top, right, bottom, left) in face_locations:
                    cv2.rectangle(img, (left, top), (right, bottom), (0, 255, 0), 2)

                st.session_state.face_preview = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
                st.image(st.session_state.face_preview, caption="Detected Face", use_container_width=True)
            else:
                st.error("No face detected. Please try again.")

    # Registration button (only enabled after capture)
    if st.session_state.face_encoding is not None:
        if st.button("Register Person"):
            ok_aadhar, aadhar_val = validate_aadhar(aadhar)
            ok_phone, phone_val = validate_phone(phone)

            if not ok_aadhar:
                st.error(aadhar_val)
                return
            if not ok_phone:
                st.error(phone_val)
                return
            if not gender:
                st.error("Please select a gender.")
                return
            if not name.strip():
                st.error("Please enter a valid name.")
                return

            success = db.add_person(
                aadhar_val, name.strip(), gender, phone_val, st.session_state.face_encoding
            )

            if success:
                st.balloons()
                st.success("Registration Successful!")

                col1, col2 = st.columns([1, 2])
                with col1:
                    st.image(st.session_state.face_preview, caption="Face", use_container_width=True)
                with col2:
                    st.markdown(f"""
                    - **Name:** {name}  
                    - **Aadhar:** {aadhar_val}  
                    - **Gender:** {gender}  
                    - **Phone:** {phone_val}  
                    """)

                # Reset state
                st.session_state.camera_open = False
                st.session_state.face_encoding = None
                st.session_state.face_preview = None
            else:
                st.error("Aadhar already exists in database.")
