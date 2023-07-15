import { createContext, useState } from "react";

// helper function that takes car of the logic for adding cart item into cart
// it wil always return an array of modified products
const addItemToCartHelper = (CartItems, product) => {
  // check if product exist in the cart
  const productIsAlreadyInCart = CartItems.find((item) => {
    return item.id === product.id;
  });

  // if the product is already in the cart, then increment the quantity.
  if (productIsAlreadyInCart) {
    // find the product and icrement its quantity by 1
    return CartItems.map((item) => {
      return item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  } else {
    // if the product is not in the cart
    // Render the product with additional quantity field of 1 by default
    return [...CartItems, { ...product, quantity: 1 }];
  }
};

// CART CONTEXT
export const CartContext = createContext({
  isCartOpened: false,
  setIscartOpened: () => {},
  cartItems: [],
  AddItemToCart: () => {},
});

// CART CONTEXT PROVIDER
export const CartContextProvider = ({ children }) => {
  const [isCartOpened, setIscartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
//   console.log(cartItems);

  // function to controll adding items to cart.
  const AddItemToCart = (product) => {
    setCartItems(addItemToCartHelper(cartItems, product));
  };

  const value = { isCartOpened, setIscartOpened, cartItems, AddItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};