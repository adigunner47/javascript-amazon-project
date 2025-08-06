export const cart = [] //Exporting cart variable to be used in other files

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
        quantity: 1
    })}
}


