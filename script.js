const hex = document.getElementById("hex");
const still = document.getElementById("slimeStill");
const gif = document.getElementById("slimeGif");

// Hover IN
hex.addEventListener("mouseenter", () => {
    hex.classList.add("hovered");

    // Wait for scale animation to finish (0.35s)
    setTimeout(() => {
        still.style.opacity = 0;   // hide still
        gif.style.opacity = 1;     // show gif

        // Restart GIF cleanly without flashing
        const src = gif.src;
        gif.src = "";
        gif.src = src;
    }, 350);
});

// Hover OUT
hex.addEventListener("mouseleave", () => {
    hex.classList.remove("hovered");

    gif.style.opacity = 0;      // hide GIF
    still.style.opacity = 1;    // show still image

    // DO NOT clear gif.src — prevents flashing border
});
