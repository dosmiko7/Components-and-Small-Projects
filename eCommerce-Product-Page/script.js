'use strict'

// Buttons
const plusButton = document.querySelector(".product-increase--quantity");
const minusButton = document.querySelector(".product-reduce--quantity");
const addToCartButton = document.querySelector(".add-to-cart");
const cartButton = document.querySelector(".header-shopcart");

// Images mechanic
const productImage = document.querySelector(".preview-actual--image");
const thumbnailImages = document.querySelectorAll(".thumbnail");

// Cart content mechanic
const shoppingCartContent = document.querySelector('.shopping-cart-content');
const contentEmpty = document.querySelector(".content-empty");
const contentProducts = document.querySelector(".content-products");
const contentProductAmountInCart = document.querySelector(".content-product--amount");
const contentProductSum = document.querySelector(".content-product--sum");
const contentProductDelete = document.querySelector(".content-product--delete");

// Quantity of product mechanic
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

// Adding product to the cart
addToCartButton.addEventListener('click', function (){
    let currentAmountInCart = parseInt(contentProductAmountInCart.textContent);
    const addingAmount = parseInt(amountOfProductToAdd.textContent);
    // If cart is empty and user is adding 0 new products
    if(contentProducts.classList.contains("disabled") && addingAmount > 0) {
        contentEmpty.classList.add("disabled");
        contentProducts.classList.remove("disabled");
    }

    let updatedAmount = currentAmountInCart + addingAmount;
    let updatedCost = updatedAmount * 125;

    contentProductAmountInCart.textContent = updatedAmount.toString();
    contentProductSum.textContent = "$" + updatedCost;
})

// Removing products from the cart
contentProductDelete.addEventListener('click', function (){
    contentProductAmountInCart.textContent = "0";
    contentProductSum.textContent = "0";

    contentProducts.classList.add("disabled");
    contentEmpty.classList.remove("disabled");
})

// Showing/Closing shop cart content
cartButton.addEventListener('click', function (){
    let currentStatus = shoppingCartContent.style.display;
    if(currentStatus === "none")
        shoppingCartContent.style.display = "grid";
    else shoppingCartContent.style.display = "none";
})