# Ujjain Mahakumbh Hackathon – Crowd & Lost Person Finder

A smart system built for **crowd monitoring, face recognition, and lost-person detection** during large-scale events like the Ujjain Mahakumbh.  
This project integrates **YOLOv8, face recognition, heatmaps, and Streamlit** into a single interactive web application.

## Key Features

- **Person Registration**  
  - Register a person with Name, Aadhar (12 digits), Gender, Phone (10 digits).  
  - Capture face encoding (using `face_recognition` + webcam).  
  - Store details securely in an SQLite database.  

- **Face Recognition**  
  - Identify a registered person by uploading an image.  
  - Retrieve their details from the database.  

- **Video People Detection**  
  - Run YOLOv8 on videos to detect people.  
  - Draw bounding boxes and count the number of people.  

- **Crowd Heatmap & Density Coloring**  
  - Create a real-time heatmap overlay to visualize crowd density.  
  - Automatically colorize areas based on the number of detected people.  

- **Lost Person Finder**  
  - Upload a video + an image of a missing person.  
  - The system scans the video frame-by-frame.  
  - If the person is found, they are highlighted with a bounding box and a **"Person Found"** alert is triggered.  

---

## 🛠️ Tech Stack

- **Python 3.9+**
- [Streamlit](https://streamlit.io/) → Web application UI  
- [OpenCV](https://opencv.org/) → Image/Video processing  
- [YOLOv8 (Ultralytics)](https://github.com/ultralytics/ultralytics) → Crowd/person detection  
- [face_recognition](https://github.com/ageitgey/face_recognition) → Face encoding & recognition  
- **SQLite3** → Local lightweight database  
- **CMake (build tool)** → Required for compiling native libraries like `dlib`


## Why CMake is Needed

This project does **not** use CMake directly.  
However, some dependencies (especially **dlib**, which powers `face_recognition`) are written in **C++**.  
When installing these libraries, `pip` triggers **CMake** to:

- Configure the build system (e.g., Makefiles or Visual Studio solutions)  
- Compile optimized C++ code into Python extensions  

Without **CMake**, installation of `face_recognition` (and thus face encoding/recognition features) will fail.  
