import React from "react";
import "../styles/Home.css"; // Importing the CSS file for Home component
import Hero from "../components/Hero"; // Importing the Home component
import Navbar from "../components/Navbar";
import Testimonals from "../components/Testimonals";
import Features from "../components/Features";
import Footer from "../components/Footer";

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
          <Features />
          <Footer />
        </main>

        {/* Footer */}
      </div>
    </>
  );
}
