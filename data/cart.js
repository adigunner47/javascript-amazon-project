export let cart;


loadFromStorage();

export function loadFromStorage(){
  cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
};


export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  let itemMatched=false;
    cart.forEach(item => {
      if (item.id === productId) {
        item.quantity++;
        itemMatched = true;
        return;
      }
    })

    //If the item is not found in the cart, add it with quantity 1
    if (!itemMatched) {
      cart.push({
        id: productId,
        quantity: 1,
    })}

    saveToStorage();
}

export function removeFromCart(productId) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
  }
  saveToStorage();
}


