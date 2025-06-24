import React from "react";
import "../styles/LoginSignup.css"; // Assuming you have a CSS file for styles
import logo from "../assets/Frame.png"; // Adjust the path as necessary
import { useState } from "react";

export default function LoginSignup() {
  const [activeTab, setActiveTab] = useState("login"); // Default to login tab

  return (
    <>
      <div className="login-main">
        {/* Login tab plane */}

        <div className="Login-Navbar">
          <div className="Company-logo">
            <div className="logo-wide">
              <img src={logo} alt="img" />
            </div>
          </div>
        </div>
        <div className="Login-Content">
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
                </button>
                <div className="Rectanglelogin"></div>
              </div>
              <button
                onClick={() => setActiveTab("signup")}
                className="login-sub-content-button"
              >
                <span className="login">Sign Up</span>
              </button>
            </div>
            {activeTab === "login" && (
              <div className="login-plane">
                <div className="login-plane-section-title">
                  <div className="login-plane-section-heading"></div>
                  <div className="login-plane-section-text"></div>
                </div>
                <div className="login-plane-forum">
                  <div className="lpf-input-name">
                    <span className="Email">Email</span>
                    <div className="text-input">
                      <span>Enter your email</span>
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
                      <span>Enter your password</span>
                    </div>
                  </div>
                  <div className="lpf-buttons">
                    <div className="lpf-button">
                      <button className="lpf-button-login">Login</button>
                    </div>
                    <div className="lpf-button">
                      <div className="lpf-google-icon">
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
                      </div>
                      <button className="lpf-button-google">
                        Login with Google
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="Login-Footer">
          <div className="footer-login-text">LegianPastry</div>
        </div>
        {/* Sign up tab plane */}
      </div>
    </>
  );
}
