import fechData from "./fetchData.js";

const minusButton = document.querySelector('.qty-count--minus');
const plusButton = document.querySelector('.qty-count--add');
const quantityInput = document.querySelector('.product-qty');
const addToCartButton = document.querySelector('.add-to-cart');
const messageElement = document.createElement('div');
messageElement.classList.add('message');
messageElement.style.display = 'none'; // Initially hide the message
messageElement.style.position = 'fixed';
messageElement.style.bottom = '20px';
messageElement.style.left = '50%';
messageElement.style.transform = 'translateX(-50%)';
messageElement.style.padding = '10px 20px';
messageElement.style.backgroundColor = '#E7F8B7';
messageElement.style.color = '#000000';
messageElement.style.borderRadius = '5px';
messageElement.style.zIndex = '1000';
document.body.appendChild(messageElement);

minusButton.addEventListener('click', () => {
  decreaseQuantity();
});

plusButton.addEventListener('click', () => {
  increaseQuantity();
});

addToCartButton.addEventListener('click', () => {
  showMessage("Embrace Sideboard with Color Yellow and Size Small added to cart");
});

function decreaseQuantity() {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

function increaseQuantity() {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue < 10) {
    quantityInput.value = currentValue + 1;
  }
}

function showMessage(message) {
  messageElement.textContent = message;
  messageElement.style.display = 'block';
  setTimeout(() => {
    messageElement.style.display = 'none';
  }, 3000); // 3 seconds
}

const updateData = async () => {
  const data = await fechData();

  const vendorElement = document.getElementById("vendor");
  const productTitleElement = document.getElementById("product-title");
  const priceElement = document.getElementById("price");
  const comparePriceElement = document.getElementById("compare-price");
  const descElement = document.getElementById("desc");


  if (vendorElement && productTitleElement) {
    vendorElement.textContent = data.product.vendor;
    productTitleElement.textContent = data.product.title;
    priceElement.textContent = data.product.price;
    comparePriceElement.textContent = data.product.compare_at_price;
    descElement.innerHTML = data.product.description;
  }
};

updateData();
