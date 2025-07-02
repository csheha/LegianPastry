import React from "react";
import "../styles/Hero.css"; // Importing the CSS file for Hero component
import styles from "../styles/liquidglass.module.css";

export default function Hero() {
  return (
    <div id="hero" className="hero-section">
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
            <button className={styles["liquidglass-button"]}>
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
        >
          <div className="hero-section-animationbox">
            <lottie-player
              className="lottie-no-watermark"
              src="https://cdn.lottielab.com/l/6aXQv8UtTAUvu7.json"
              background="transparent"
              speed="0.2"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}
