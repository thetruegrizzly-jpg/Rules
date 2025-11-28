const hex = document.getElementById("hex");
const still = document.getElementById("slimeStill");
const gif = document.getElementById("slimeGif");

// Start with GIF hidden, still visible
still.style.opacity = 1;
gif.style.opacity = 0;

// Hover in → enlarge + show GIF
hex.addEventListener("mouseenter", () => {
    hex.classList.add("hovered");

    // show GIF, hide still
    still.style.opacity = 0;
    gif.style.opacity = 1;

    // restart GIF animation from frame 0
    gif.src = gif.src;
});

// Hover out → shrink + instantly stop GIF
hex.addEventListener("mouseleave", () => {
    hex.classList.remove("hovered");

    // hide GIF immediately
    gif.style.opacity = 0;

    // show still image
    still.style.opacity = 1;

    // clear GIF source so it cannot animate while small
    gif.src = "";

    // reassign GIF after a tiny delay so it's ready for next hover
    setTimeout(() => {
        gif.src = "images/Slime gif.gif";
    }, 30);
});
