import React from "react";
import "../styles/Hero.css"; // Importing the CSS file for Hero component

export default function Hero() {
  return (
    <>
      <div id="hero" className="hero-section">
        <div className="hero-section-container">
          <div className="hero-section-column"></div>
          <div className="hero-section-content">
            <span className="heading">
              Get Ready to virtually join Chef Vindes Lee for an Unforgettable
              authentic Tapas experience
            </span>
            <span className="text">$12/month annually</span>
          </div>
          <div className="hero-section-action">
            <div className="hero-section-action-button">
              <span className="hero-section-action-button-text">
                Start the class now
              </span>
            </div>
          </div>
          <div className="hero-section-placeholder">
            <div className="hero-section-placeholder-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="104"
                viewBox="0 0 128 104"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.8 0.800049H115.2C122.269 0.800049 128 6.53061 128 13.6V90.4C128 97.4695 122.269 103.2 115.2 103.2H12.8C5.73056 103.2 0 97.4695 0 90.4V13.6C0 6.53061 5.73056 0.800049 12.8 0.800049ZM58.688 72.6081L83.584 55.9681C84.9254 55.0938 85.7344 53.6013 85.7344 52C85.7344 50.3988 84.9254 48.9063 83.584 48.032L58.688 31.392C57.2179 30.3988 55.3203 30.297 53.7523 31.1277C52.185 31.9584 51.2032 33.586 51.2 35.36V68.64C51.2032 70.4141 52.185 72.0416 53.7523 72.8724C55.3203 73.7031 57.2179 73.6013 58.688 72.6081Z"
                  fill="black"
                  fill-opacity="0.15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
