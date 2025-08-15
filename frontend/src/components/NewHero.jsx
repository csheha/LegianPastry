import React from "react";
import "../styles/NewHero.css"; // Importing the CSS file for Hero component
import Bundown from "../assets/hero/Bun-down.png";
import Bunup from "../assets/hero/Bun-Up.png";
import Cheese from "../assets/hero/Cheese.png";
import Ginger from "../assets/hero/Ginger.png";
import Ham from "../assets/hero/Ham.png";
import Onion from "../assets/hero/Onion.png";
import Salad from "../assets/hero/Salad.png";
import Tomato from "../assets/hero/Tomato.png";
import Leaf from "../assets/hero/Leaf.png";
import { useEffect } from "react";
import logoImage from "../assets/Frame.png";

export default function NewHero() {
  useEffect(() => {
    let Bunup = document.getElementById("Bunup");
    let Onion = document.getElementById("Onion");
    let Ginger = document.getElementById("Ginger");
    let Tomato = document.getElementById("Tomato");
    let Cheese = document.getElementById("Cheese");
    let Ham = document.getElementById("Ham");
    let Bundown = document.getElementById("Bundown");
    let Leaf = document.getElementById("Leaf");
    let Salad = document.getElementById("Salad");

    window.addEventListener("scroll", () => {
      let scrollValue = window.scrollY;
      // Cap the scroll max to 500 for smoother control
      if (scrollValue > 500) scrollValue = 500;

      // Normalize progress (0 to 1)
      const progress = scrollValue / 200;

      // Helper function to apply transform
      function applyTransform(element, xMultiplier, yMultiplier) {
        element.style.transform = `translate(${xMultiplier * progress}px, ${
          yMultiplier * progress
        }px)`;
      }
      // Apply transforms
      applyTransform(Bunup, 186, 200 + 135);
      applyTransform(Leaf, 200, 200 + 10);
      applyTransform(Salad, 186, 200 + 120);
      applyTransform(Onion, 186, 200 + 110);
      applyTransform(Ginger, 186, 200 + 95);
      applyTransform(Tomato, 186, 200 + 88);
      applyTransform(Cheese, 186, 200 + 70);
      applyTransform(Ham, 186, 200 + 60);
      applyTransform(Bundown, 186, 200 + 50);
    });
  }, []);
  return (
    <div>
      <div className="parallax">
        <img className="Bunup" src={Bunup} id="Bunup" />
        <img className="Salad" src={Salad} id="Salad" />
        <img className="Onion" src={Onion} id="Onion" />
        <img className="Ginger" src={Ginger} id="Ginger" />
        <img className="Tomato" src={Tomato} id="Tomato" />
        <img className="Cheese" src={Cheese} id="Cheese" />
        <img className="Ham" src={Ham} id="Ham" />
        <img className="Bundown" src={Bundown} id="Bundown" />
        <img className="Leaf" src={Leaf} id="Leaf" />
      </div>

      <div className="hero-logo-title">
        <img src={logoImage} alt="Legian Pastry Logo" className="logo-icon" />
        <div className="brand-text">
          <h1 className="brand-name">
            <span className="brand-part1">Legian</span>
            <span className="brand-part2">Pastry</span>
          </h1>
          <p className="brand-subtitle">
            Sweetening your moments, one pastry at a time
          </p>
        </div>
      </div>
    </div>
  );
}
