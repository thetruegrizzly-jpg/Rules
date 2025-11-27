const hex = document.getElementById("hex");
const still = document.getElementById("slimeStill");
const gif = document.getElementById("slimeGif");

// Hover in → enlarge + swap to GIF
hex.addEventListener("mouseenter", () => {
    hex.classList.add("hovered");

    // Show GIF, hide still
    gif.style.opacity = 1;
    still.style.opacity = 0;

    // Force GIF to restart from frame 0
    gif.src = gif.src;
});

// After enlarge animation ends
hex.addEventListener("transitionend", e => {
    if (e.propertyName === "transform") {
        // nothing else needed
    }
});

// Hover out → shrink + hide GIF instantly
hex.addEventListener("mouseleave", () => {
    hex.classList.remove("hovered");

    // Hide GIF immediately
    gif.style.opacity = 0;

    // Show still image again
    still.style.opacity = 1;

    // Reset GIF so it starts from the beginning next hover
    gif.src = "";
    setTimeout(() => gif.src = "images/Slime gif.gif", 50);
});
