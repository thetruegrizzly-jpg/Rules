const hex = document.getElementById("hex");
const gif = document.getElementById("slimeGif");

// Start invisible
gif.style.opacity = 0;

// Hover starts the enlarge/rotate animation
hex.addEventListener("mouseenter", () => {
  hex.classList.add("hovered");
});

// When finished enlarging, show + restart the GIF
hex.addEventListener("transitionend", (e) => {
  if (e.propertyName === "transform") {
    gif.src = gif.src; // restart the GIF by reloading source
    gif.style.opacity = 1;
  }
});

// Hide the GIF when mouse leaves
hex.addEventListener("mouseleave", () => {
  hex.classList.remove("hovered");
  gif.style.opacity = 0;
});
