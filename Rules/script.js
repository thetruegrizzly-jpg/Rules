const hex = document.getElementById("hex");
const still = document.getElementById("slimeStill");
const gif = document.getElementById("slimeGif");

hex.addEventListener("mouseenter", () => {
  hex.classList.add("hovered");
});

hex.addEventListener("transitionend", (e) => {
  if (e.propertyName === "transform") {
    gif.src = "images/Slime gif.gif";
    gif.style.opacity = 1;
    still.style.opacity = 0;
  }
});

hex.addEventListener("mouseleave", () => {
  hex.classList.remove("hovered");

  gif.style.opacity = 0;
  still.style.opacity = 1;

  gif.src = "";
});
