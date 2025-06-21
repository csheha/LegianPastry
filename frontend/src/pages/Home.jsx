import React from "react";
import "../styles/Home.css"; // Importing the CSS file for Home component
import Hero from "../components/Hero"; // Importing the Home component
import Navbar from "../components/Navbar";
import Testimonals from "../components/Testimonals";
import About from "../components/About";
import Features from "../components/Features";
import Footer from "../components/Footer";
import DevelopersSection from "../components/DevelopersSection";

export default function Home() {
  return (
    <>
      <div className="home-container">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Testimonals />
          <Features />
          <DevelopersSection />
          <Footer />
        </main>

        {/* Footer */}
      </div>
    </>
  );
}
