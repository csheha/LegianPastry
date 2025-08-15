import React, { useEffect, useState } from "react";
import "../styles/FoodGallery.css";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import SpinnerLoader from "./SpinnerLoader";
import { useNavigate } from "react-router-dom"; // <-- Added import

//const API_BASE_URL = `https://legianpastry-production-946e.up.railway.app`;
const API_BASE_URL = `http://localhost:5000`;

export default function FoodGallery() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // <-- Added useNavigate hook

  // Function to fetch the image
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/images/`);
        if (Array.isArray(res.data)) {
          setImages(res.data);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setError("Failed to load images.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const getImg = (img) => {
    // Normalize filepath by replacing backslashes with forward slashes
    const cleanedPath = img.filepath.replace(/\\/g, "/");
    setTempImgSrc(`${API_BASE_URL}/` + cleanedPath);
    setModel(true);
  };

  // Back button handler
  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      {/* CHANGE 3: Back button added */}
      <button
        onClick={handleBack}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#333",
          color: "#fff",
        }}
      >
        ← Back
      </button>

      {/* CHANGE 1: Render modal conditionally only when open */}
      {model && (
        <div className="model open">
          <img src={tempImgSrc} alt="Modal content" />
          {/* CHANGE 2: Wrap CloseIcon in a button for better accessibility */}
          <button
            className="close-button"
            onClick={() => setModel(false)}
            aria-label="Close modal"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <CloseIcon />
          </button>
        </div>
      )}

      {loading && (
        <div className="loading">
          <SpinnerLoader />
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="gallery">
        {images.length > 0 &&
          !loading &&
          !error &&
          images.map((item, index) => {
            return (
              <div className="pics" key={index} onClick={() => getImg(item)}>
                <img
                  src={`${API_BASE_URL}/${item.filepath.replace(/\\/g, "/")}`}
                  alt={item.title}
                  style={{ width: "100%" }}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}
