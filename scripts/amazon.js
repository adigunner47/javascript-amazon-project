/*
Writing a Javascript file basically follow 3 steps:
1) Save the data
2) Generate the HTML
3) Make it interactive.
*/

// const { fa } = require("zod/v4/locales");


//The data is saved as arrays and objects in products.js file.
//The products array will be used to generate the HTML for the products page.

import {cart, addToCart} from '../data/cart.js' //Importing cart variable and findCartQuantity function from cart.js file
import {products} from '../data/products.js' //Importing products array from products.js file
import {formatCurrency} from './utils/money.js' //Importing formatCurrency function from money.js file


document.querySelector('.products-grid').innerHTML  = ``;
products.forEach(product =>{
  document.querySelector('.products-grid').innerHTML += `
  <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.getStarsURL()}">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${product.getPrice()}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary"
          data-product-id="${product.id}" data-product-quantity>
            Add to Cart
          </button>
        </div>
  ` 
})


function updateCartQuantity() {

  let cartQuantity = 0;
  cart.forEach(item =>{
    cartQuantity+= item.quantity
  });

  document.querySelector('.cart-quantity').innerHTML = cartQuantity

}

document.querySelectorAll('.add-to-cart-button').forEach(button => {
  button.addEventListener('click', () => {
    
    addToCart(button.dataset.productId);
    
    updateCartQuantity();

    })
    
  })


