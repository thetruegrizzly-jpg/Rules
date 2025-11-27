const hex = document.getElementById("hex");
const gif = document.getElementById("slimeGif");

// Start invisible
gif.style.opacity = 0;

hex.addEventListener("mouseenter", () => {
  hex.classList.add("hovered");
});

hex.addEventListener("transitionend", (e) => {
  if (e.propertyName === "transform") {
    // Restart GIF so it plays from the beginning
    gif.src = gif.src;
    gif.style.opacity = 1;
  }
});

hex.addEventListener("mouseleave", () => {
  hex.classList.remove("hovered");
  gif.style.opacity = 0;
});
