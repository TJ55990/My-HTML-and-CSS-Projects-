const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

images.forEach((img) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "block";

        // Replace small image with large version
        let largeImg = img.src.replace("-small", "");
        lightboxImg.src = largeImg;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});
