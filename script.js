const hex = document.getElementById("hex");
const still = document.getElementById("slimeStill");
const gif = document.getElementById("slimeGif");

// When cursor enters — enlarge + swap images
hex.addEventListener("mouseenter", () => {
    hex.classList.add("hovered");

    // Start GIF ONLY after enlargement finishes
    setTimeout(() => {
        gif.style.opacity = 1;
        still.style.opacity = 0;

        // Restart the GIF by resetting src
        gif.src = "images/Slime gif.gif";
    }, 350); // matches CSS transition time
});

// When cursor leaves — shrink + hide GIF instantly
hex.addEventListener("mouseleave", () => {
    hex.classList.remove("hovered");

    gif.style.opacity = 0;
    still.style.opacity = 1;

    // Stop the GIF so it doesn't animate small
    gif.src = "";
});
