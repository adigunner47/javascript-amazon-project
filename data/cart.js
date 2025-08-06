export const cart = [] //Exporting cart variable to be used in other files

export function findCartQuantity() {

  let cartQuantity = 0;
  cart.forEach(item =>{
    cartQuantity+= item.quantity
  });

  return cartQuantity;

}

