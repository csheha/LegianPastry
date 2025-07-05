import React, { useRef, useEffect, useState } from "react";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import "../styles/GalleryManagement.css";
import CloseIcon from "@mui/icons-material/Close";

const API_BASE_URL = `https://legianpastry-production-946e.up.railway.app`;

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
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Items per page

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

  // Handle delete option
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/images/${id}`);

      //after delete remove deleted image from state
      setImages(images.filter((image) => image._id !== id));
      alert("Image deleted successfully!");
    } catch (err) {
      console.error("Error deleting image:", err);
      alert("Failed to delete image.");
    }
  };

  // Handle edit option
  const handleEdit = async (image) => {
    // Populate the dialog with existing details
    setTitle(image.title);
    setDescription(image.description);
    setFile(null); // Optionally

    openDialog();

    //handle form submission after editing
    const handleEditSubmit = async (e) => {
      e.preventDefault();
      try {
        const formData = new FormData();
        formData.append("title", title.trim());
        formData.append("description", description.trim());
        if (file) formData.append("image", file);

        // Send PUT request to backend
        const res = await axios.put(
          `${API_BASE_URL}/images/${image._id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        // Update the image in state
        setImages(
          images.map((img) =>
            img._id === image._id ? { ...img, ...res.data } : img
          )
        );

        alert("Image updated successfully!");
        closeDialog();
      } catch (err) {
        console.error("Error editing image:", err);
        alert("Failed to edit image.");
      }
      return handleEditSubmit;
    };
  };

  // Conditional Rendering of Hooks
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Pagination logic
  const totalPages = Math.ceil(images.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentImages = images.slice(startIndex, startIndex + pageSize);

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

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
            {Array.isArray(currentImages) &&
              currentImages.map((image) => (
                <tr key={image._id}>
                  <td className="G-table-data">{image.title || "N/A"}</td>
                  <td className="G-table-data">{image.description || "N/A"}</td>
                  <td className="G-table-data">
                    <button onClick={() => handleDelete(image._id)}>
                      <AutoDeleteIcon />
                    </button>
                    <button onClick={() => handleEdit(image)}>
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* Pagination Info */}
        <div className="pagination-info">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + pageSize, images.length)} of {images.length}{" "}
          images
        </div>

        {/* Pagination Controls */}
        <div className="pagination-container">
          <button
            className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
            onClick={previousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`pagination-btn ${
                currentPage === pageNumber ? "active" : ""
              }`}
              onClick={() => goToPage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}

          <button
            className={`pagination-btn ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
