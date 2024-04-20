import { initializeImageSlider } from "./imageSlider.js";

export const initializeDynamicElements = () => {

    document.addEventListener('DOMContentLoaded', function () {
        const showcaseContainer = document.querySelector('.img-showcase');
        const selectContainer = document.querySelector('.img-select');

        // Add images dynamically
        const images = [
            "/img1.jpeg",
            "/img2.jpeg",
            "/img3.jpeg",
            "/img4.jpeg"
        ];

        images.forEach((image, index) => {
            // Create showcase image
            const showcaseImg = document.createElement('img');
            showcaseImg.src = image;
            showcaseContainer.appendChild(showcaseImg);

            // Create thumbnail
            const thumbnailItem = document.createElement('div');
            thumbnailItem.classList.add('img-item');
            thumbnailItem.innerHTML = `
                <a href="#" data-id="${index + 1}">
                    <img src="${image}" ${index + 1}">
                </a>
            `;
            selectContainer.appendChild(thumbnailItem);
        });

        initializeImageSlider();

    });
};

initializeDynamicElements();

