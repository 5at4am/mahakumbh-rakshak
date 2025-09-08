import streamlit as st
import cv2
import numpy as np
from ultralytics import YOLO


# ----------------- Heatmap Utilities -----------------
class HeatmapAccumulator:
    def __init__(self, shape, decay=0.95, blur=25):
        """
        shape: (h, w) size of heatmap
        decay: factor to fade old heatmap values (0-1, higher = slower fade)
        blur: Gaussian blur kernel size for smoother heatmap
        """
        self.h, self.w = shape
        self.decay = decay
        self.blur = blur
        self.heat = np.zeros((self.h, self.w), dtype=np.float32)

    def update(self, points):
        """Update heatmap with new points (list of (x,y) tuples)."""
        # Decay old values
        self.heat *= self.decay

        for (x, y) in points:
            xi = int(np.clip(x, 0, self.w - 1))
            yi = int(np.clip(y, 0, self.h - 1))
            self.heat[yi, xi] += 1.0

        # Smooth
        if self.blur > 0:
            self.heat = cv2.GaussianBlur(self.heat, (0, 0), sigmaX=self.blur, sigmaY=self.blur)

        # Normalize
        if self.heat.max() > 0:
            norm = (self.heat / self.heat.max() * 255).astype(np.uint8)
        else:
            norm = self.heat.astype(np.uint8)

        return norm

    @staticmethod
    def overlay(frame, heatmap, alpha=0.6):
        """Overlay heatmap on frame."""
        colored = cv2.applyColorMap(heatmap, cv2.COLORMAP_JET)
        overlay = cv2.addWeighted(frame, alpha, colored, 1 - alpha, 0)
        return overlay


def process_detections(frame, detections, heatmap_acc):
    """
    Process YOLO detections and update heatmap.
    detections: list of bounding boxes [x1,y1,x2,y2,class_id,confidence]
    Only persons (class_id == 0 in COCO) are counted.
    """
    people_points = []
    people_count = 0

    for (x1, y1, x2, y2, cls_id, conf) in detections:
        if int(cls_id) == 0:  # COCO class 0 = person
            cx, cy = int((x1 + x2) / 2), int((y1 + y2) / 2)
            people_points.append((cx, cy))
            people_count += 1
            # Draw bounding box
            cv2.rectangle(frame, (int(x1), int(y1)), (int(x2), int(y2)), (0, 255, 0), 2)
            cv2.putText(frame, f"Person {conf:.2f}", (int(x1), int(y1) - 5),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

    # Update heatmap
    heatmap = heatmap_acc.update(people_points)
    overlay_frame = heatmap_acc.overlay(frame, heatmap)

    return overlay_frame, people_count


# ----------------- Streamlit Page -----------------
def heatmap_page():
    st.header("🔥 Crowd Heatmap & Density Detection")

    video_file = st.file_uploader("Upload a Video", type=["mp4", "avi", "mov"])
    if not video_file:
        return

    # Save uploaded video temporarily
    tfile = "temp_video.mp4"
    with open(tfile, "wb") as f:
        f.write(video_file.read())

    cap = cv2.VideoCapture(tfile)
    ret, frame = cap.read()
    if not ret:
        st.error("Could not read video")
        return

    heatmap_acc = HeatmapAccumulator(frame.shape[:2])
    yolo = YOLO("yolov8n.pt")

    stframe = st.empty()
    counter = st.empty()

    cap.set(cv2.CAP_PROP_POS_FRAMES, 0)

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        results = yolo(frame, verbose=False)
        detections = []
        for box in results[0].boxes.data.cpu().numpy():
            x1, y1, x2, y2, conf, cls_id = box
            detections.append([x1, y1, x2, y2, cls_id, conf])

        overlay_frame, people_count = process_detections(frame, detections, heatmap_acc)

        # ---- Crowd Density Coloring ----
        if people_count < 50:
            status = "🟢 SAFE"
            color = (0, 255, 0)  # Green
        elif people_count < 100:
            status = "🟡 CAUTION"
            color = (0, 255, 255)  # Yellow
        else:
            status = "🔴 DANGER"
            color = (0, 0, 255)  # Red

        # Apply density overlay
        overlay = overlay_frame.copy()
        overlay[:] = color
        density_colored = cv2.addWeighted(overlay_frame, 0.7, overlay, 0.3, 0)

        # Add text banner
        cv2.putText(
            density_colored,
            f"People: {people_count} | Status: {status}",
            (30, 40),
            cv2.FONT_HERSHEY_SIMPLEX,
            1.0,
            (255, 255, 255),
            3,
        )

        # Streamlit display
        stframe.image(cv2.cvtColor(density_colored, cv2.COLOR_BGR2RGB))
        counter.markdown(f"### 👥 People Detected: **{people_count}** | Status: {status}")

    cap.release()
    cv2.destroyAllWindows()
