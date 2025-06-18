import React from "react";
import "../styles/Home.css"; // Importing the CSS file for Home component
import Hero from "../components/Hero"; // Importing the Home component
import Navbar from "../components/Navbar";
import Testimonals from "../components/Testimonals";

export default function Home() {
  return (
    <>
      <div className="home-container">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <Testimonals />
        </main>

        {/* Footer */}
      </div>
    </>
  );
}
