import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AdminLogin.css";
import Logo from "../assets/Frame.png";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/admin/login", {
        username,
        password,
      });

      localStorage.setItem("adminToken", res.data.token);
      alert("Login successful!");
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div>
        <div className="admin-login-top-bar">
          <div className="admin-login-logo">
            <img src={Logo} alt="LegianPastry" />
          </div>
        </div>
        <div className="admin-login-container">
          <form className="admin-login-form" onSubmit={handleLogin}>
            <h1 className="admin-login-title">Admin Login</h1>
            {error && <p className="admin-login-error">{error}</p>}
            <input
              type="text"
              className="admin-login-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              className="admin-login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="admin-login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
