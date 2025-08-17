import React from "react";
import "../styles/LoginSignup.css";
import logo from "../assets/Frame.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

//const API_BASE_URL = `https://legianpastry-production-946e.up.railway.app`;
const API_BASE_URL = `http://localhost:5000`;

export default function LoginSignup({ onClose, onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Login Handle function
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });

      // Extract token and user data from response
      const token = res.data.token;
      const userData = res.data.user || {
        email: email,
        username: res.data.username || email.split("@")[0],
      };

      setMessage("Login successful!");

      // Call the parent component's success handler
      if (onLoginSuccess) {
        onLoginSuccess(token, userData);
      }

      // Close the modal
      if (onClose) {
        onClose();
      }

      // Navigate to home
      navigate("/");
      console.log("Login successful! Token:", token);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Login failed. Check your credentials."
      );
    }
  };

  // SignUp Handle function
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_BASE_URL}/auth/signup`, {
        email,
        username,
        address,
        contactNumber,
        password,
      });

      setMessage("SignUp successful!");
      console.log("SignUp successful!");

      // Switch to login tab after successful signup
      setActiveTab("login");

      // Clear form fields
      setEmail("");
      setUsername("");
      setAddress("");
      setContactNumber("");
      setPassword("");
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Signup failed. Please try again."
      );
    }
  };

  // Google Login Success Handler
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      console.log(credentialResponse);
      const decodedToken = jwtDecode(credentialResponse.credential);
      console.log(decodedToken);

      // Create user data from Google token
      const userData = {
        email: decodedToken.email,
        username: decodedToken.name,
        picture: decodedToken.picture,
        isGoogleUser: true,
      };

      setMessage("Google login successful!");

      // Call the parent component's success handler
      if (onLoginSuccess) {
        onLoginSuccess(credentialResponse.credential, userData);
      }

      // Close the modal
      if (onClose) {
        onClose();
      }

      // Navigate to home page
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error);
      setMessage("Google login failed. Please try again.");
    }
  };

  // Google Login Error Handler
  const handleGoogleError = () => {
    console.log("Google Login Failed");
    setMessage("Google login failed. Please try again.");
  };

  // Admin button handle function
  const handleAdminClick = () => {
    navigate("/admin/login");
  };

  return (
    <>
      <div className="login-main">
        <div className="Login-Navbar">
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
          <div className="Company-logo">
            <div className="logo-wide">
              <img src={logo} alt="img" />
            </div>
          </div>
        </div>
        <div className="Login-Content">
          {activeTab === "login" && (
            <div className="login-sub-content">
              <div className="login-sub">
                <div className="login-sub-content-wrapper">
                  <button
                    onClick={() => setActiveTab("login")}
                    className="login-sub-content-wrapper-button"
                  >
                    <span className="login-sub-content-wrapper-button-text">
                      Login
                    </span>
                    <div className="Rectanglelogin"></div>
                  </button>
                </div>
                <button
                  onClick={() => setActiveTab("signup")}
                  className="login-sub-content-button"
                >
                  <span className="signup-tab">Sign Up</span>
                </button>
              </div>

              <div className="login-plane">
                <div className="login-plane-section-title">
                  <div className="login-plane-section-heading">Login</div>
                  <div className="login-plane-section-text">
                    Welcome Back! Let's Savor the Sweetness
                  </div>
                </div>
                <form className="login-plane-forum" onSubmit={handleLogin}>
                  <div className="lpf-input-name">
                    <label className="Email">Email</label>
                    <div className="text-input">
                      <input
                        type="email"
                        id="email"
                        className="placeholder"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="lpf-input-password">
                    <div className="lpf-input-password-label">
                      <span className="lpf-password">Password</span>
                      <span className="lpf-forgotpassword">
                        Forgot your password
                      </span>
                    </div>
                    <div className="text-input">
                      <input
                        type="password"
                        id="password"
                        className="placeholder"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="lpf-buttons">
                    <div className="lpf-button">
                      <button type="submit" className="liquidglass-button">
                        Login
                      </button>
                    </div>
                    <div className="lpf-button">
                      <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleError}
                        text="signin_with"
                        theme="outline"
                        size="large"
                      />
                    </div>
                  </div>
                </form>
                <button className="admin-login" onClick={handleAdminClick}>
                  Admin
                </button>
                {message && (
                  <p
                    style={{
                      marginTop: 10,
                      color: message.includes("successful") ? "yellow" : "red",
                    }}
                  >
                    {message}
                  </p>
                )}
              </div>
            </div>
          )}

          {activeTab === "signup" && (
            <div className="login-sub-content">
              <div className="login-sub">
                <div className="login-sub-content-wrapper">
                  <button
                    onClick={() => setActiveTab("signup")}
                    className="login-sub-content-wrapper-button"
                  >
                    <span className="login-sub-content-wrapper-button-text">
                      Sign Up
                    </span>
                    <div className="Rectanglelogin"></div>
                  </button>
                </div>
                <button
                  onClick={() => setActiveTab("login")}
                  className="login-sub-content-button"
                >
                  <span className="signup-tab">Login</span>
                  <div className="Rectanglelogin"></div>
                </button>
                <div className="Rectanglelogin"></div>
              </div>

              <form className="login-plane" onSubmit={handleSignUp}>
                <div className="login-plane-section-title">
                  <div className="login-plane-section-heading">Sign Up</div>
                  <div className="login-plane-section-text">
                    Your Pastry Adventure Begins Here
                  </div>
                </div>
                <div className="login-plane-forum">
                  <div className="lpf-input-name">
                    <label className="Email">Email</label>
                    <div className="text-input">
                      <input
                        type="email"
                        id="email"
                        className="placeholder"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="lpf-input-name">
                    <label className="Email">Username</label>
                    <div className="text-input">
                      <input
                        type="text"
                        id="username"
                        className="placeholder"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="lpf-input-name">
                    <label className="Email">Address</label>
                    <div className="text-input">
                      <input
                        type="text"
                        id="address"
                        className="placeholder"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="lpf-input-name">
                    <label className="Email">Contact Number</label>
                    <div className="text-input">
                      <input
                        type="tel"
                        id="contactnumber"
                        className="placeholder"
                        placeholder="+94 785691234"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="lpf-input-password">
                    <div className="lpf-input-password-label">
                      <label className="lpf-password">Password</label>
                      <span className="lpf-forgotpassword">
                        Forgot Your password
                      </span>
                    </div>
                    <div className="text-input">
                      <input
                        type="password"
                        id="password"
                        className="placeholder"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="lpf-buttons">
                    <div className="lpf-button">
                      <button type="submit" className="liquidglass-button">
                        Sign Up
                      </button>
                    </div>
                    <div className="lpf-button">
                      <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleError}
                        text="signup_with"
                        theme="outline"
                        size="large"
                      />
                    </div>
                  </div>
                </div>
              </form>
              <button className="admin-login" onClick={handleAdminClick}>
                Admin
              </button>
              {message && (
                <p
                  style={{
                    marginTop: 10,
                    color: message.includes("successful") ? "yellow" : "red",
                  }}
                >
                  {message}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
