import React from "react";
import "../styles/Home.css"; // Importing the CSS file for Home component
import Hero from "../components/Hero"; // Importing the Home component

export default function Home() {
  return (
    <>
      <div className="home-container">
        <Hero />
      </div>
    </>
  );
}
