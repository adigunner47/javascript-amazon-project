//OOP: The basic idea of OOP is to organize everything around objects that contain both data and functions that operate on that data.
//In this case, we will create a cart object that will contain all the functions and data related to the cart.

//To take a real-world example, thing a of shopping cart in a grocery store. The cart itself is an object that contains items (data) and has functions like addItem, removeItem, and getTotal (functions that operate on that data).

//OOP represents the real-world and makes the code more easier to understand.


const cart = {
  cartItems: undefined,

  loadFromStorage(){
    this.cartItems = localStorage.getItem('cart-oop') ? JSON.parse(localStorage.getItem('cart-oop')) : [];
  },

  saveToStorage() {
    localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
  },

  addToCart(productId) {
    let itemMatched=false;
      this.cartItems.forEach(item => {
        if (item.id === productId) {
          item.quantity++;
          itemMatched = true;
          return;
        }
      })
  
      //If the item is not found in the cart, add it with quantity 1
      if (!itemMatched) {
        this.cartItems.push({
          id: productId,
          quantity: 1,
      })}
  
      this.saveToStorage();
  },

  removeFromCart(productId) {
    const itemIndex = this.cartItems.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
      this.cartItems.splice(itemIndex, 1);
    }
    saveToStorage();
  }


}

cart.loadFromStorage();