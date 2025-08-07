//Class: Classes are basically object generators, helps us generate objects. With a class you can create multiple objects having the same properties and data as defined in the class blueprint.

//A class a better way to generate objects also comes with some ectra OOP features.

class Cart {
  cartItems; //This is a public property
  #localStorageKey; //Private property: The # makes this private so it coud only be accessed inside the class

  //With evert creation of object, the below constructor code/function will be ran. So this is a good place to to have our setup/initialization code.
  constructor(localStorageKey){
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage(){
    this.cartItems = localStorage.getItem(this.#localStorageKey) ? JSON.parse(localStorage.getItem(this.#localStorageKey)) : [];
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

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
  }

  removeFromCart(productId) {
    const itemIndex = this.cartItems.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
      this.cartItems.splice(itemIndex, 1);
    }
    saveToStorage();
  }

}


const cart = new Cart('cart-oop'); //Similar syntaxt as function except it starts with new.
const businessCart = new Cart('business-cart')


cart.loadFromStorage();
businessCart.loadFromStorage();
