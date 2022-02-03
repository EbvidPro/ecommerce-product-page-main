// if(document.readyState == 'loading') {
//     document.addEventListener("DOMContentloaded", ready)
// } else {
//     ready()
// }

// function ready() {

// }
let mainImage = document.querySelector('.presentImage');
let imageSRC = mainImage.getAttribute("src");
function changeImage1() {
    mainImage.setAttribute("src", "images/image-product-1.jpg");
}
function changeImage2() {
    mainImage.setAttribute("src", "images/image-product-2.jpg");
}
function changeImage3() {
    mainImage.setAttribute("src", "images/image-product-3.jpg");
}
function changeImage4() {
    mainImage.setAttribute("src", "images/image-product-4.jpg");
}

// Quantity Functions
let initialQt = 1;
document.querySelector(".add").addEventListener("click", () => {
    initialQt++;
    document.querySelector(".value-in-cart").innerHTML = initialQt;
    let actualPrice = 250 * initialQt;
    let discountPrice = (actualPrice / 2)
    document.querySelector(".current-prize").innerHTML = "$" + actualPrice + ".00";
    document.querySelector(".discount-value").innerHTML = "$" + discountPrice + ".00";
})
document.querySelector(".sub").addEventListener("click", () => {
    initialQt--;
    if (initialQt >= 1) {
        document.querySelector(".value-in-cart").innerHTML = initialQt;
        let actualPrice = 250 * initialQt;
        let discountPrice = (actualPrice / 2)
        document.querySelector(".current-prize").innerHTML = "$" + actualPrice + ".00";
        document.querySelector(".discount-value").innerHTML = "$" + discountPrice + ".00";
    }
})

//Cart Function
document.querySelector(".Cart").addEventListener("click", () => {
    let cartDiv = document.querySelector(".cartBasket");
    if (cartDiv.style.display == 'none') {
        cartDiv.style.display = "block";
    } else {
        cartDiv.style.display = "none";
    }
})

//Mobile Menu Function 
document.querySelector(".hamburg").addEventListener("click", () => {
    let hamburg = document.querySelector(".hamburg")
    let hamburgImage = hamburg.getAttribute("src");

    if (hamburgImage == "images/icon-menu.svg") {
        hamburg.setAttribute("src", "images/icon-close.svg");
        document.querySelector(".nav ul").style.display = "flex";
    } else {
        hamburg.setAttribute("src", "images/icon-menu.svg");
        document.querySelector(".nav ul").style.display = "none";
    }
})

//Next and Previous Function 
document.querySelector(".next").addEventListener("click", () => {
    let nextImage = mainImage.getAttribute("src");
    if (nextImage == "images/image-product-1.jpg") {
        mainImage.setAttribute("src", "images/image-product-2.jpg")
    } else if (nextImage == "images/image-product-2.jpg") {
        mainImage.setAttribute("src", "images/image-product-3.jpg")
    } else if (nextImage == "images/image-product-3.jpg") {
        mainImage.setAttribute("src", "images/image-product-4.jpg")
    }
})

document.querySelector(".previous").addEventListener("click", () => {
    let nextImage = mainImage.getAttribute("src");
    if (nextImage == "images/image-product-2.jpg") {
        mainImage.setAttribute("src", "images/image-product-1.jpg")
    } else if (nextImage == "images/image-product-3.jpg") {
        mainImage.setAttribute("src", "images/image-product-2.jpg")
    } else if (nextImage == "images/image-product-4.jpg") {
        mainImage.setAttribute("src", "images/image-product-3.jpg")
    }
})

//Add to cart Function 
document.querySelector(".add-cart-btn").addEventListener("click", () => {
    document.querySelector(".hidden-cart").style.display = "block";
    document.querySelector(".empty").style.display = "none";
    document.querySelector(".cartBasket").style.display = "block";
    let Qt = document.querySelector(".value-in-cart").innerHTML;
    let cartQt = document.querySelector(".product-qts");
    cartQt.innerHTML = Qt;

    document.querySelector(".quantity").style.display = "block";

    let totalPrice = document.querySelector(".discount-value").innerHTML;
    let totalPriceCart = document.querySelector(".total-prize");
    totalPriceCart.innerHTML = totalPrice;
})

//Remove from cart Function 
document.querySelector(".delete-item").addEventListener("click", (e) => {
    let deleteButton = e.target;
    deleteButton.parentElement.parentElement.remove();
    document.querySelector(".empty").style.display = 'block';
    document.querySelector(".quantity").style.display = "none";

})