import React from "react";
import "../styles/LoginSignup.css"; // Assuming you have a CSS file for styles
import logo from "../assets/Frame.png"; // Adjust the path as necessary
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//Integrate Google Login
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

//const API_BASE_URL = `https://legianpastry-production-946e.up.railway.app`;
const API_BASE_URL = `http://localhost:5000`;

export default function LoginSignup({ onClose, onLoginSuccess }) {
  //inside login box navbar switch between login and signup
  const [activeTab, setActiveTab] = useState("login"); // Default to login tab

  //UseStates for handle use login
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //using use Navigate hook
  const navigate = useNavigate();

  //Login Handle function
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });
      setMessage(`Login successful! Token: ${res.data.token} `);

      // Close the modal
      if (onClose) {
        onClose();
      }
      //navigate to home
      navigate("/");
      console.log(`Login successful! Token: ${res.data.token} `);

      if (onLoginSuccess) {
        onLoginSuccess(); // This updates isLoggedIn in Navbar
      }
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Login failed. Check your credentials."
      );
    }
  };

  //SignUp Handle function
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
      setMessage(`SignUp successful! `);

      console.log(`SignUp successful! `);
      //navigate to login
      setActiveTab("login");
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

      setMessage("Google login successful!");

      // Close the modal
      if (onClose) {
        onClose();
      }
      if (onLoginSuccess) {
        onLoginSuccess(); // This updates isLoggedIn in Navbar
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

  //admin button handle function
  const handleAdminClick = () => {
    navigate("/admin/login");
  };

  return (
    <>
      <div className="login-main">
        <div className="Login-Navbar">
          {/* Login tab plane */}
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="lpf-buttons">
                    <div className="lpf-button">
                      <button className="liquidglass-button">Login</button>
                    </div>
                    <div className="lpf-button">
                      {/* Fixed Google Login - removed nested button structure */}
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
          {/* Sign up tab plane */}
          {activeTab === "signup" && (
            <div className="login-sub-content">
              <div className="login-sub">
                <div className="login-sub-content-wrapper">
                  <button
                    onClick={() => setActiveTab("login")}
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setUsername(e.target.value)}
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
                        onChange={(e) => setAddress(e.target.value)}
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
                        onChange={(e) => setContactNumber(e.target.value)}
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
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="lpf-buttons">
                    <div className="lpf-button">
                      <button className="liquidglass-button">Sign Up</button>
                    </div>
                    <div className="lpf-button">
                      <button className="lpf-button-google">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21 11.79C21 15.94 18.79 21 12.13 21C7.12461 21.0332 3.03852 17.0053 3 12C3.03852 6.99461 7.12461 2.9667 12.13 2.99996C14.2007 3.00764 16.2085 3.71213 17.83 4.99996C17.942 5.09149 18.0109 5.22557 18.02 5.36996C18.0206 5.51605 17.963 5.65637 17.86 5.75996C17.209 6.35516 16.5882 6.98261 16 7.63996C15.8289 7.82826 15.5422 7.85432 15.34 7.69996C14.4161 7.01624 13.2888 6.66394 12.14 6.69996C9.18528 6.69996 6.79 9.09524 6.79 12.05C6.79 15.0047 9.18528 17.4 12.14 17.4C15.14 17.4 16.41 16.12 17.07 13.85H12.5C12.2239 13.85 12 13.6261 12 13.35V10.7C12 10.4238 12.2239 10.2 12.5 10.2H20.5C20.7302 10.1985 20.9244 10.3711 20.95 10.6C20.9871 10.9955 21.0038 11.3927 21 11.79Z"
                            fill="black"
                          />
                        </svg>
                        Login with Google
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <button className="admin-login" onClick={handleAdminClick}>
                Admin
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
