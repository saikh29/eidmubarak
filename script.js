// Flip images infinitely
const images = document.querySelectorAll(".gallery img");
let index = 0;

function flipImages() {
    images.forEach((img, i) => {
        img.style.animation = "flipImages 3s infinite";
        img.style.animationDelay = `${i * 1}s`;
    });
}

flipImages();
