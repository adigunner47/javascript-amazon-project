import {cart, removeFromCart} from '../data/cart.js'; //Importing cart variable from cart.js file
import {products} from '../data/products.js'; //Importing products array from products.js file
import {formatCurrency} from './utils/money.js'; //Importing formatCurrency function from money.js file
import {deliveryOptions} from '../data/deliveryOptions.js'; //Importing deliveryOptions array from deliveryOptions.js file

import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


let cartSummaryHTML = '';
cart.forEach((cartItem) => {
  const productId = cartItem.id;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });


  cartSummaryHTML += `
    <div class="cart-item-container
      js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date-${matchingProduct.id} delivery-date" >
        Delivery date: ${getDeliveryDate(7)}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option" data-delivery-date="${getDeliveryDate(7)}" data-product-id="${matchingProduct.id}">
            <input type="radio" checked
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                ${getDeliveryDate(7)}
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option" data-delivery-date= "${getDeliveryDate(3)}" data-product-id="${matchingProduct.id}">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                ${getDeliveryDate(3)}
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option" data-delivery-date="${getDeliveryDate(1)}" data-product-id="${matchingProduct.id}">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                ${getDeliveryDate(1)}
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-order-summary')
  .innerHTML = cartSummaryHTML;

// document.querySelector('.order-summary')
//   .innerHTML = `<p>Your cart is empty.</p>`;


function getDeliveryDate(deliveryDays) {
  const today = dayjs();
  const deliveryDate = today.add(deliveryDays, 'day');
  return deliveryDate.format('dddd, MMMM D');
}

document.querySelectorAll('.delete-quantity-link').forEach(link => {
  link.addEventListener('click', () => {
    removeFromCart(link.dataset.productId);
    document.querySelector(`.js-cart-item-container-${link.dataset.productId}`).remove();
  })
})

document.querySelectorAll('.delivery-option').forEach(input => {
  input.addEventListener('click', () => {

    console.log(input.dataset.deliveryDate, input.dataset.productId);
    document.querySelector(`.delivery-date-${input.dataset.productId}`).innerHTML = `Delivery date: ${input.dataset.deliveryDate}`;
  });
})


