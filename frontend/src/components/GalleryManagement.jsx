import React, { useRef, useEffect, useState } from "react";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import "../styles/GalleryManagement.css";
import CloseIcon from "@mui/icons-material/Close";

const API_BASE_URL = "http://localhost:5000";

export default function GalleryManagement() {
  // loading and error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // add button
  const [isAddButton, setIsAddButton] = useState(false);
  // dailog box
  const dialogRef = useRef(null);
  // image add form data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);

  // 1. Fetch images on mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/images/`);
        setImages(res.data); // Update based on API structure
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  // 2. Handling dailog box open when click Add button

  const openDialog = () => {
    setIsAddButton(true);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    setIsAddButton(false);
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  // 3. Handle images data
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!title.trim() || !description.trim() || !file) {
      alert("Please fill in all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("description", description.trim());
    formData.append("image", file);

    try {
      // Upload image
      await axios.post(`${API_BASE_URL}/images/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Image successfully added!");

      // Reset form state
      setTitle("");
      setDescription("");
      setFile(null);

      // Close dialog
      closeDialog();

      // Refresh images list
      const res = await axios.get(`${API_BASE_URL}/images`);
      setImages(res.data);
    } catch (err) {
      console.error("Error uploading image:", err); // For debugging
      alert(err.response?.data?.message || "Upload failed!");
    }
  };

  // Conditional Rendering of Hooks
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="GalleryManagement">
      {/* Add Images to the Gallery*/}
      <div className="Add-Image">
        <div className="Add-image-section">
          <button className="Add-image-button" onClick={openDialog}>
            Add
          </button>
          <dialog ref={dialogRef}>
            <form onSubmit={handleSubmit}>
              <button type="button" onClick={closeDialog}>
                <CloseIcon />
              </button>
              <label className="label">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Enter title"
                className="input-element"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label className="label">Description</label>
              <input
                type="text"
                id="description"
                placeholder="Enter description"
                className="input-element"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label className="label">Choose an Image</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                className="input-element"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button type="submit">Submit</button>
            </form>
          </dialog>
        </div>
      </div>
      {/* Gallery Table */}
      <div className="GalleryTable-Container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>{/* Rest of your component */}</>
        )}
        <table className="GalleryTable">
          <thead>
            <tr>
              <th className="G-table-header">Title</th>
              <th className="G-table-header">Description</th>
              <th className="G-table-header">Manage</th>
            </tr>
          </thead>
          <tbody>
            {images.length > 0 ? (
              images.map((image) => (
                <tr key={image._id}>
                  <td className="G-table-data">{image.title || "N/A"}</td>
                  <td className="G-table-data">{image.description || "N/A"}</td>
                  <td className="G-table-data">
                    <button>
                      <AutoDeleteIcon />
                    </button>
                    <button>
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No images found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
