// Elements for gallery images
const galleryImages = document.querySelectorAll(".img");
const heroImg = document.querySelector(".product-hero");
// Element for product counter
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const counter = document.querySelector(".counter");
// Element for Add to cart
const cart = document.querySelector(".cart");
const cartBtn = document.querySelector(".cart-btn");
const cartModal = document.querySelector(".cart-open");
const cartContainer = document.querySelector(".container-cart");
const quantityNumber = document.querySelector(".quantity-number");

// Event to change gallery image
galleryImages.forEach((img) => {
  img.addEventListener("click", changeImage);
});
// Event to increse/decrease quantity
plus.addEventListener("click", increaseQuant);
minus.addEventListener("click", decreaseQuant);
//Event to open cart modal
cartBtn.addEventListener("click", openCart);
//Event to add item to cart
cart.addEventListener("click", addToCart);

//functions
function changeImage(event) {
  galleryImages.forEach((img) => {
    img.classList.remove("active");
  });

  event.target.classList.add("active");

  heroImg.src = event.target.src.replace("-thumbnail", "");
}

function increaseQuant() {
  let value = parseInt(counter.innerHTML);
  value = value + 1;
  counter.innerHTML = value;
}

function decreaseQuant() {
  let value = parseInt(counter.innerHTML);
  if (value > 0) {
    value = value - 1;
    counter.innerHTML = value;
  }
}

function openCart() {
  if (cartModal.classList.contains("hidden")) {
    cartModal.classList.remove("hidden");
  } else {
    cartModal.classList.add("hidden");
  }
}

let quantity = 0;
function addToCart() {
  quantity = quantity + parseInt(counter.innerHTML);
  let html = `
   <p class="cart-head">Cart</p>
   <div class="product-add">
      <div class="added-image">
      <img src="./images/image-product-1-thumbnail.jpg" />
      </div>
      <div class="added-information">
      <p class="product-name-cart">Autumn Limited Edition...</p>
      <p class="product-price-cart">$125 x ${quantity}<span class="total-price"> $${
    125 * quantity
  }</span></p></p>
      </div>
      <div class="delete-btn">
      <img
         src="./images/icon-delete.svg"
         alt="delete"
         class="dustbin"
      />
      </div>
   </div>
   <button class="checkout">Checkout</button>
   `;
  cartContainer.innerHTML = html;
  quantityNumber.innerHTML = quantity;
}
