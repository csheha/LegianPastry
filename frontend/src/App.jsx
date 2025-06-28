import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

import Home from "./pages/Home"; // Importing the Home component
import Gallery from "./pages/Gallery";
import Auth from "../src/components/Auth"; // Importing the Auth component
import LoginSignup from "../src/components/LoginSignup"; // Importing the LoginSignup component
import Class from "../src/pages/Class";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
      delay: 100, // Delay (in ms) before animation starts
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/class" element={<Class />} />
        {/*Admin AdminDashboard*/}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
