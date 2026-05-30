// Auto Scroll Down Slowly

let scrollSpeed = 1; // pixels per frame

function autoScroll() {
    window.scrollBy(0, scrollSpeed);

    if (
        window.innerHeight + window.scrollY <
        document.body.scrollHeight
    ) {
        requestAnimationFrame(autoScroll);
    }
}

// Start after 2 seconds
window.onload = () => {
    setTimeout(autoScroll, 2000);
};