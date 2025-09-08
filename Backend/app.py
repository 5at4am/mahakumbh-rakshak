import streamlit as st
from register_page import register_page
from recognition_page import recognition_page
from heatmap_page import heatmap_page
from lost_person_finder import lost_person_page

def main():
    st.set_page_config(page_title="Mahakumbh Crowd & Lost Person Finder", layout="wide")

    st.sidebar.title("📌 Navigation")
    page = st.sidebar.radio(
        "Go to",
        [
            "📝 Register Person",
            "🔍 Recognize Face",
            "🔥 Crowd Heatmap & Density Detection",
            "🕵️‍♂️ Lost Person Finder"
        ],
    )

    if page == "📝 Register Person":
        register_page()
    elif page == "🔍 Recognize Face":
        recognition_page()
    elif page == "🔥 Crowd Heatmap & Density Detection":
        heatmap_page()
    elif page == "🕵️‍♂️ Lost Person Finder":
        lost_person_page()

if __name__ == "__main__":
    main()
