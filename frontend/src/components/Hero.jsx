import React from "react";
import "../styles/Hero.css"; // Importing the CSS file for Hero component
import styles from "../styles/liquidglass.module.css";
import NewHero from "./NewHero";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div id="hero" className="hero-section">
      <NewHero />
      <div className="hero-section-container">
        <div className="hero-section-column">
          <div className="hero-section-content">
            <span
              className="heading"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Get Ready to virtually join Chef Vindes Lee for an Unforgettable
              authentic Tapas experience
            </span>
            <span className="text">$12/month annually</span>
          </div>
          <div className="hero-section-action">
            <button
              className={styles["liquidglass-button"]}
              onClick={navigate("/class")}
            >
              <div className="hero-section-action-button-text">
                Start the class now
              </div>
            </button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-once="true"
          className="hero-section-placeholder"
        ></div>
      </div>
    </div>
  );
}
