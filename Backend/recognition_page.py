import streamlit as st
import cv2
import numpy as np
import face_recognition
from db_utils import Database

db = Database()


def recognition_page():
    st.header("🔍 Face Recognition")

    uploaded_file = st.file_uploader("Upload an Image", type=["jpg", "jpeg", "png"])

    if uploaded_file:
        # Convert to numpy
        file_bytes = np.asarray(bytearray(uploaded_file.read()), dtype=np.uint8)
        img = cv2.imdecode(file_bytes, 1)
        rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        # Show preview of uploaded image
        st.image(cv2.cvtColor(img, cv2.COLOR_BGR2RGB), caption="Uploaded Image", use_container_width=True)

        # Step 1: Detect faces only after button click
        if st.button("Detect Faces"):
            face_locations = face_recognition.face_locations(rgb)
            encodings = face_recognition.face_encodings(rgb, face_locations)

            if not face_locations:
                st.error("No face detected. Please try another image.")
                return

            # Draw bounding boxes
            for (top, right, bottom, left) in face_locations:
                cv2.rectangle(img, (left, top), (right, bottom), (0, 255, 0), 2)

            preview_img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            st.image(preview_img, caption="Detected Face(s)", use_container_width=True)

            # Step 2: Compare encodings with database
            persons = db.get_all()
            known_encodings = [p["encoding"] for p in persons]
            known_details = [p for p in persons]

            results = []
            for face_encoding in encodings:
                matches = face_recognition.compare_faces(known_encodings, face_encoding, tolerance=0.5)
                face_distances = face_recognition.face_distance(known_encodings, face_encoding)

                if any(matches):
                    best_match_idx = np.argmin(face_distances)
                    matched_person = known_details[best_match_idx]
                    results.append(matched_person)
                else:
                    results.append(None)

            # Step 3: Show results
            st.subheader("Recognition Results")
            for i, res in enumerate(results):
                if res:
                    st.success(
                        f"Match Found for Face {i+1}\n\n"
                        f"**Name:** {res['name']}\n\n"
                        f"**Aadhar:** {res['aadhar']}\n\n"
                        f"**Phone:** {res['phone']}\n\n"
                        f"**Gender:** {res['gender']}"
                    )
                else:
                    st.error(f"Face {i+1}: No match found in database.")
