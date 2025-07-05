import React, { useRef, useEffect, useState } from "react";
import "../styles/ClassManagement.css";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const API_BASE_URL = `https://legianpastry-production-946e.up.railway.app`;

export default function ClassManagement() {
  // loading and error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // dailog box
  const dialogRef = useRef(null);
  // video add form data
  const [food, setFood] = useState("");
  const [chef, setChef] = useState("");
  const [file, setFile] = useState(null);
  const [videos, setVideos] = useState([]);
  // add button
  const [isAddButton, setIsAddButton] = useState(false);
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Items per page

  // fetch videos on mount
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/videos/`);
        setVideos(res.data);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  //Handling dailog box open when click Add button
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

  //Handle submit video data
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!food.trim() || !chef.trim() || !file) {
      alert("Please fill in all fields and select an video.");
      return;
    }

    const formData = new FormData();
    formData.append("food", food.trim());
    formData.append("chef", chef.trim());
    formData.append("video", file);

    try {
      // Upload image
      await axios.post(`${API_BASE_URL}/videos/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Video successfully added!");

      // Reset form state
      setFood("");
      setChef("");
      setFile(null);

      // Close dialog
      closeDialog();

      // Refresh videos list
      const res = await axios.get(`${API_BASE_URL}/videos`);
      setVideos(res.data);
    } catch (err) {
      console.error("Error uploading video:", err); // For debugging
      alert(err.response?.data?.message || "Upload failed!");
    }
  };
  // Handle delete option
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/videos/${id}`);

      //after delete remove deleted image from state
      setVideos(videos.filter((video) => video._id !== id));
      alert("Video deleted successfully!");
    } catch (err) {
      console.error("Error deleting video:", err);
      alert("Failed to delete video.");
    }
  };

  const handleEdit = async (video) => {
    // Populate the dialog with existing details
    setFood(video.food);
    setChef(video.chef);
    setFile(null); // Optionally

    openDialog();

    //handle form submission after editing
    const handleEditSubmit = async (e) => {
      e.preventDefault();

      try {
        const formData = new FormData();
        formData.append("food", food.trim());
        formData.append("chef", chef.trim());
        if (file) formData.append("video", file);

        // Send PUT request to backend
        const res = await axios.put(
          `${API_BASE_URL}/videos/${video._id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        // Update the video in state
        setVideos(
          videos.map((video) =>
            video._id === video._id ? { ...video, ...res.data } : video
          )
        );

        alert("Video updated successfully!");
        closeDialog();
      } catch (err) {
        console.error("Error editing video:", err);
        alert("Failed to edit video.");
      }
      return handleEditSubmit;
    };
  };

  // Conditional Rendering of Hooks
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Pagination logic
  const totalPages = Math.ceil(videos.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentVideos = videos.slice(startIndex, startIndex + pageSize);

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
    <>
      <div className="ClassManagement">
        <div className="Add-Video">
          <div className="Add-image-section">
            <button className="Add-video-button" onClick={openDialog}>
              Add
            </button>
            <dialog ref={dialogRef}>
              <form onSubmit={handleSubmit}>
                <button type="button" onClick={closeDialog}>
                  <CloseIcon />
                </button>
                <label className="label">Food</label>
                <input
                  type="text"
                  id="food"
                  placeholder="Enter Food Name"
                  className="input-element"
                  value={food}
                  onChange={(e) => setFood(e.target.value)}
                />
                <label className="label">Chef </label>
                <input
                  type="text"
                  id="chef"
                  placeholder="Enter Chef Name"
                  className="input-element"
                  value={chef}
                  onChange={(e) => setChef(e.target.value)}
                />

                <label className="label">Choose a Video</label>
                <input
                  type="file"
                  id="video"
                  accept="video/*"
                  className="input-element"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <button type="submit">Submit</button>
              </form>
            </dialog>
          </div>
        </div>
        {/* Classes table*/}
        <div className="ClassTable-Container">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <>{/* Rest of your component */}</>
          )}
          <table className="ClassTable">
            <thead>
              <tr>
                <th className="C-table-header">Food Name</th>
                <th className="C-table-header">Chef Name</th>
                <th className="C-table-header">Manage</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(currentVideos) &&
                currentVideos.map((video) => (
                  <tr key={video._id}>
                    <td className="G-table-data">{video.food || "N/A"}</td>
                    <td className="G-table-data">{video.chef || "N/A"}</td>
                    <td className="G-table-data">
                      <button onClick={() => handleDelete(video._id)}>
                        <AutoDeleteIcon />
                      </button>
                      <button onClick={() => handleEdit(video)}>
                        <EditIcon />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {/* Pagination Controls */}
          <div className="pagination-container">
            <button
              className={`pagination-btn ${
                currentPage === 1 ? "disabled" : ""
              }`}
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
    </>
  );
}
