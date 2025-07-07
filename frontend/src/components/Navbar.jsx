import React, { useEffect, useState } from "react";
import burgerIcon from "../assets/burger.png";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Model from "../components/Model.jsx";
import LoginSignup from "./LoginSignup.jsx";
import { Link } from 'react-scroll';


const navItems = [
  { name: "About", to: "about" },
  { name: "Classes", to: "class" },
  { name: "Contact", to: "contact" },
  { name: "Gallery", to: "gallery" },
];

export default function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  //state to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
            <Link
              className="link-logo"
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              <img src={burgerIcon} alt="Burger Icon" />
              <span>LegianPastry</span>
            </Link>
          </div>

          <div className={`navbar-content ${menuOpen ? "responsive_nav" : ""}`}>
            <div className="close-button">
              <button onClick={toggleMenu}>
                <FaTimes size={20} className="fa-close" />
              </button>
            </div>

            <div className="navbar-links">
              {navItems.map((item, key) => (
                <Link
                  className="link"
                  key={key}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="navbar-login">
              <a
                href="#login"
                onClick={(e) => {
                  e.preventDefault();
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
