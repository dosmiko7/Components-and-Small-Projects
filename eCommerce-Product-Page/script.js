'use strict'

const plusButton = document.querySelector(".product-increase--quantity");
const minusButton = document.querySelector(".product-reduce--quantity");
const addToCartButton = document.querySelector(".add-to-cart");
const cartButton = document.querySelector(".header-shopcart");

const productImage = document.querySelector(".preview-actual--image");
const thumbnailImages = document.querySelectorAll(".thumbnail");


const amountOfProductToAdd = document.querySelector(".product-current--quantity");

// Changing main product photo
let currentActiveThumbnail = document.querySelector(".active");
for (let i = 0; i < thumbnailImages.length; i++) {
    thumbnailImages[i].addEventListener('click', function (e) {
        if(e.target !== currentActiveThumbnail) {
            // Change to a new photo
            const pathToImage = e.target.src.slice(-36).replace("-thumbnail", "");
            e.target.classList.add("active");
            productImage.src = pathToImage;

            // Remove active status from previous one and replace objects
            currentActiveThumbnail.classList.remove("active");
            currentActiveThumbnail = e.target;
        }
    })
}

// Quantity of product functionality
plusButton.addEventListener('click', function (){
    const currentValue = parseInt(amountOfProductToAdd.textContent);
    amountOfProductToAdd.innerHTML = (currentValue + 1).toString();
})

minusButton.addEventListener('click', function (){
    const currentValue = parseInt(amountOfProductToAdd.textContent);
    if(currentValue > 0)
        amountOfProductToAdd.innerHTML = (currentValue - 1).toString();
})