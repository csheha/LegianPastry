import React from "react";
import "../styles/Features.css"; // Importing the CSS file for Features component
import largeImage from "../assets/largeimg.jpg"; // Replace with actual image path
import smallImage from "../assets/smallimg.jpg"; // Replace with actual image path

const featuresData = [
  {
    heading: "Private group up to 10 people",
    text: "Enjoy an intimate and personalized experience in a small group setting, ensuring exclusive access and meaningful interactions",
  },
  {
    heading: "Exclusive secret recipies",
    text: "Get access to unique, chef-curated recipes that are not available anywhere else, crafted to elevate your cooking skills.",
  },
  {
    heading: "Ask the chef directly via DMs",
    text: "Connect one-on-one with the chef to ask questions, seek advice, or get personalized tips for your culinary journey.",
  },
];

export default function Features() {
  return (
    <>
      <div className="FeaturesSection">
        <div className="heading-features">
          <span className="heading-features-text">Features</span>
        </div>
        <div className="features-container">
          <div
            className="features-images"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img className="feature-image1" src={smallImage} alt="image1" />
          </div>
          <div
            className="feature-list"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {featuresData.map((feature, index) => (
              <div className="feture-list-item">
                <div className="feature-list-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="40"
                    viewBox="0 0 36 40"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M35.46 10.24L35.18 9.74C34.8188 9.13538 34.3094 8.63286 33.7 8.28L20.28 0.54C19.6724 0.1875 18.9826 0.00124 18.28 0H17.7C16.9974 0.00124 16.3076 0.1875 15.7 0.54L2.28 8.3C1.67394 8.65052 1.17052 9.15394 0.82 9.76L0.54 10.26C0.1875 10.8677 0.00124 11.5575 0 12.26V27.76C0.00124 28.4626 0.1875 29.1524 0.54 29.76L0.82 30.26C1.17958 30.859 1.68098 31.3604 2.28 31.72L15.72 39.46C16.3246 39.8198 17.0164 40.0066 17.72 40H18.28C18.9826 39.9988 19.6724 39.8126 20.28 39.46L33.7 31.7C34.312 31.3574 34.8174 30.852 35.16 30.24L35.46 29.74C35.8082 29.1306 35.9942 28.442 36 27.74V12.24C35.9988 11.5375 35.8126 10.8477 35.46 10.24ZM17.7 4H18.28L30 10.76L18 17.68L6 10.76L17.7 4ZM20 35L31.7 28.24L32 27.74V14.22L20 21.16V35Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="feature-content-box">
                  <div className="feature-content">
                    <div className="feature-context-head">
                      {feature.heading}
                    </div>
                    <div className="feature-content-text">{feature.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
