/*
Writing a Javascript file basically follow 3 steps:
1) Save the data
2) Generate the HTML
3) Make it interactive.
*/

// const { fa } = require("zod/v4/locales");


//The data is saved as arrays and objects in products.js file.
//The products array will be used to generate the HTML for the products page.


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
              src="images/ratings/rating-${Number(product.rating.stars)*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}
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


document.querySelectorAll('.add-to-cart-button').forEach(button => {
  button.addEventListener('click', () => {
    let itemMatched=false;
    cart.forEach(item => {
      if (item.id === button.dataset.productId) {
        item.quantity++;
        itemMatched = true;
        return;
      }
    })

    
    if (!itemMatched) {
      cart.push({
        id: button.dataset.productId,
        quantity: 1
    })}

    
    document.querySelector('.cart-quantity').innerHTML = findCartQuantity();

    })
    
  })


