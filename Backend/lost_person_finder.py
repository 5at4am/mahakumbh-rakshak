import streamlit as st
import cv2
import numpy as np
import face_recognition
from ultralytics import YOLO


def lost_person_page():
    st.header("🕵️‍♂️ Lost Person Finder")

    st.markdown("Upload a reference **photo of the lost person** and a **video** to search in.")

    # Upload lost person's photo
    lost_img_file = st.file_uploader("Upload Lost Person's Image", type=["jpg", "jpeg", "png"])
    if lost_img_file:
        file_bytes = np.asarray(bytearray(lost_img_file.read()), dtype=np.uint8)
        img = cv2.imdecode(file_bytes, 1)
        rgb_img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        face_locations = face_recognition.face_locations(rgb_img)
        encodings = face_recognition.face_encodings(rgb_img, face_locations)

        if not encodings:
            st.error("No face detected in reference image.")
            return

        lost_encoding = encodings[0]
        st.image(rgb_img, caption="Reference Image", use_container_width=True)
    else:
        return

    # Upload video
    video_file = st.file_uploader("Upload Video", type=["mp4", "avi", "mov"])
    if not video_file:
        return

    tfile = "temp_lost_video.mp4"
    with open(tfile, "wb") as f:
        f.write(video_file.read())

    cap = cv2.VideoCapture(tfile)
    ret, frame = cap.read()
    if not ret:
        st.error("Could not read video")
        return

    stframe = st.empty()
    message_placeholder = st.empty()

    yolo = YOLO("yolov8n.pt")
    person_found = False

    cap.set(cv2.CAP_PROP_POS_FRAMES, 0)

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        # Run YOLO for person detection
        results = yolo(frame, verbose=False)
        detections = results[0].boxes.data.cpu().numpy()

        for det in detections:
            x1, y1, x2, y2, conf, cls_id = det
            if int(cls_id) == 0:  # only persons
                person_crop = frame[int(y1):int(y2), int(x1):int(x2)]
                if person_crop.size == 0:
                    continue

                rgb_crop = cv2.cvtColor(person_crop, cv2.COLOR_BGR2RGB)
                face_locs = face_recognition.face_locations(rgb_crop)
                encs = face_recognition.face_encodings(rgb_crop, face_locs)

                for enc in encs:
                    match = face_recognition.compare_faces([lost_encoding], enc, tolerance=0.5)
                    if match[0]:
                        person_found = True
                        cv2.rectangle(frame, (int(x1), int(y1)), (int(x2), int(y2)), (0, 0, 255), 3)
                        cv2.putText(frame, "FOUND!", (int(x1), int(y1) - 10),
                                    cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 0, 255), 3)

        stframe.image(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))

        if person_found:
            message_placeholder.success("Lost person FOUND in video!")
        else:
            message_placeholder.warning("Searching...")

    cap.release()
    cv2.destroyAllWindows()