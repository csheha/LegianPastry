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
          <button className="hero-section-placeholder-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.33301 32C5.33301 17.2724 17.2721 5.33331 31.9997 5.33331C39.0721 5.33331 45.8549 8.14283 50.8559 13.1438C55.8568 18.1448 58.6663 24.9276 58.6663 32C58.6663 46.7276 46.7273 58.6667 31.9997 58.6667C17.2721 58.6667 5.33301 46.7276 5.33301 32ZM27.1198 43.4134L42.6664 33.7067C43.2482 33.3341 43.6001 32.6909 43.6001 32C43.6001 31.3092 43.2482 30.6659 42.6664 30.2934L27.0664 20.5867C26.452 20.1993 25.6758 20.1755 25.0388 20.5244C24.4018 20.8734 24.004 21.5403 23.9998 22.2667V41.7334C23.9912 42.4774 24.3963 43.1647 25.0514 43.5174C25.7065 43.8702 26.5033 43.8301 27.1198 43.4134Z"
                fill="#95B300"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
