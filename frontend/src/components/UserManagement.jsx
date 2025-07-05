import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UserManagement.css";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import EditIcon from "@mui/icons-material/Edit";

const API_BASE_URL = `${process.env.REACT_APP_API_URL}`;

export default function UserManagement() {
  // managing states
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Items per page

  //Handling fetch Data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/auth/fetchusers`);
        console.log(res.data);
        setUsers(res.data.data); // Fix: use res.data.data based on your API response
      } catch (err) {
        console.log("Error of Fetching Users!");
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  // Handle delete option
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/auth/delete/${id}`);

      //after delete remove deleted image from state
      setUsers(users.filter((user) => user._id !== id));
      alert("User deleted successfully!");
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Failed to delete user.");
    }
  };

  //Handling loading and error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Pagination logic
  const totalPages = Math.ceil(users.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentUsers = users.slice(startIndex, startIndex + pageSize);

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
      <div className="UserTable-Container">
        <table className="UserTable">
          <thead className="UserTable-content">
            <tr>
              <th className="U-table-header">UserId</th>
              <th className="U-table-header">UserName</th>
              <th className="U-table-header">Email</th>
              <th className="U-table-header">Contact Number</th>
              <th className="U-table-header">Address</th>
              <th className="U-table-header">Manage</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(currentUsers) &&
              currentUsers.map((user) => (
                <tr key={user._id}>
                  <td className="U-table-data">{user._id}</td>
                  <td className="U-table-data">{user.username}</td>
                  <td className="U-table-data">{user.email}</td>
                  <td className="U-table-data">{user.contactNumber}</td>
                  <td className="U-table-data">{user.address}</td>
                  <td className="U-table-data">
                    <button onClick={() => handleDelete(user._id)}>
                      <AutoDeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Pagination Info */}
        <div className="pagination-info">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + pageSize, users.length)} of {users.length}{" "}
          users
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
    </>
  );
}
