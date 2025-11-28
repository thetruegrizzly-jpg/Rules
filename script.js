const hex = document.getElementById("hex");
const still = document.getElementById("slimeStill");
const gif = document.getElementById("slimeGif");

// Hover IN
hex.addEventListener("mouseenter", () => {
    hex.classList.add("hovered");

    // Wait until scale/rotate finishes
    setTimeout(() => {
        still.style.opacity = 0;
        gif.style.opacity = 1;

        // Restart GIF without blank frame flash
        const currentSrc = gif.src;
        gif.src = currentSrc;
    }, 350);
});

// Hover OUT
hex.addEventListener("mouseleave", () => {
    hex.classList.remove("hovered");

    // Fade back to still image
    gif.style.opacity = 0;
    still.style.opacity = 1;

    // Do NOT clear gif.src — this prevents flashing
});
