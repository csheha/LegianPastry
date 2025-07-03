import React, { useEffect, useState } from "react";
import "../styles/VideoGallery.css";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export default function FoodGallery() {
  const [model, setModel] = useState(false);
  const [tempVideoSrc, setTempVideoSrc] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Function to fetch the video
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/videos/`);
        
        if (Array.isArray(res.data)) {
          setVideos(res.data);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError("Failed to load videos.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const getVideo = (video) => {
    // Normalize filepath by replacing backslashes with forward slashes
    const cleanedPath = video.filepath.replace(/\\/g, "/");
    setTempVideoSrc(`${API_BASE_URL}/` + cleanedPath);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <video src={tempVideoSrc} controls autoPlay />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {videos.length > 0 && !loading && !error && (
          videos.map((item, index) => {
          return (
            <div
              className="videos"
              key={item.id}
              onClick={() => getVideo(item)}
              title={item.food}
            >
              <video 
                src={`${API_BASE_URL}/${item.filepath.replace(/\\/g, '/')}`} 
                controls 
                style={{ width: "100%" }}
                alt={item.food}
              />
              <h4>{item.food}</h4>
              <p>{item.chef}</p>
            </div>
          );
        }))}
      </div>
    </>
  );
}
