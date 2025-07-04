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
  const progress = scrollValue / 500;

  // Calculate position
  const top = 14 + 172 * progress; // 14 → 186
  const left = 677 + 7 * progress; // 677 → 684

  Bundown.style.top = `${top}px`;
  Bundown.style.left = `${left}px`;
});
