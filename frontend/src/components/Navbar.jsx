import React, { useEffect, useState } from "react";
import burgerIcon from "../assets/burger.png";
import Model from "../components/Model"; // to handle opening loginsignup dailog box
import LoginSignup from "../components/LoginSignup";
const navItems = [
  { name: "About", href: "#about" },
  { name: "Classes", href: "#class" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  {
    /* Login Signup dailog box open state and methods*/
  }
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 40,
          transition: "all 0.3s ease",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            style={{
              fontSize: "24px",
              fontWeight: "1000",
              color: "#f5f5dc",
              fontFamily: '"Modak", cursive',
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
            href="#hero"
          >
            <img
              src={burgerIcon}
              alt="Burger Icon"
              style={{
                width: "60px",
                height: "60px",
                margin: "10px",
              }}
            />
            <span>LegianPastry</span>
          </a>

          <div
            style={{
              display: "flex",
              gap: "100px",
              justifyContent: "center",
              flex: "1",
            }}
          >
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#f3ebe2",
                  transition: "color 0.3s ease",
                  textDecoration: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#000";
                  e.target.style.backgroundColor = "#eeb662";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#f3ebe2";
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div>
            <button
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#f3ebe2",
                textDecoration: "none",
                alignItems: "center",
                marginRight: "50px",
                padding: "10px 20px",
                borderRadius: "5px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#000";
                e.target.style.backgroundColor = "#eeb662";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#f3ebe2";
                e.target.style.backgroundColor = "transparent";
              }}
              onClick={openLoginModal}
            >
              Log In
            </button>
          </div>
        </div>
      </nav>
      {isLoginModalOpen && (
        <Model onClose={closeLoginModal}>
          <LoginSignup />
        </Model>
      )}
    </>
  );
}
