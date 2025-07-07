import React, { useEffect, useState } from "react";
import burgerIcon from "../assets/burger.png";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Model from "../components/Model.jsx";
import LoginSignup from "./LoginSignup.jsx";


const navItems = [
  { name: "About", href: "#about" },
  { name: "Classes", href: "#class" },
  { name: "Contact", href: "#contact" },
  { name: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  //state to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // callback function to recieve login results
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const openLoginModal = () => {
    console.log("Login modal opened");
    setIsLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    console.log("Login modal closed");
    setIsLoginModalOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert("Logged out successfully.");
  };
  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <a href="#hero">
              <img src={burgerIcon} alt="Burger Icon" />
              <span>LegianPastry</span>
            </a>
          </div>

          <div className={`navbar-content ${menuOpen ? "responsive_nav" : ""}`}>
            <div className="close-button">
              <button onClick={toggleMenu}>
                <FaTimes size={20} className="fa-close" />
              </button>
            </div>

            <div className="navbar-links">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="navbar-login">
              <a
                href="#login"
                onClick={() => {
                  setMenuOpen(false);
                  if (isLoggedIn) {
                    handleLogout(); // You'll need to define this function
                  } else {
                    openLoginModal();
                  }
                }}
              >
                {isLoggedIn ? "Logout" : "Login"}
              </a>
            </div>
          </div>

          <div className="menu-icon">
            <button onClick={toggleMenu}>
              <FaBars size={28} className="fa-menu" />
            </button>
          </div>
        </div>
      </nav>
      {isLoginModalOpen && (
        <Model>
          <LoginSignup
            onClose={closeLoginModal}
            onLoginSuccess={handleLoginSuccess}
          />
        </Model>
      )}
    </>
  );
}
