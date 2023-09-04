import { createContext, useState, useEffect } from "react";

// helper function that takes car of the logic for adding cart item into cart
// it wil always return an array of modified products
const addItemToCartHelper = (CartItems, productToAdd) => {
  // check if product exist in the cart
  const productIsAlreadyInCart = CartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  // if the product is already in the cart, then increment the quantity.
  if (productIsAlreadyInCart) {
    // find the product and increment its quantity by 1
    return CartItems.map((item) => {
      return item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  } else {
    // if the product is not in the cart
    // Render the product with additional quantity field of 1 by default
    return [...CartItems, { ...productToAdd, quantity: 1 }];
  }
};

// HELPER FUNCTION TO REMOVE ITEM FROM CART
const removeItemFromCartHelper = (cartItems, productToRemove) => {
  // if the item quantity > 1, then subtract 1
  if (productToRemove.quantity > 1) {
    return cartItems.map((item) => {
      return item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  }
  // if the item quantity = 1, then remove the item from the cart.
  // if (productToRemove.quantity === 1) {
  //   // delete the item from cart items
  //   return cartItems.filter((item) => {
  //     return item.id !== productToRemove.id;
  //   });
  // }
  return cartItems
};

// CART CONTEXT
export const CartContext = createContext({
  isCartOpened: false,
  setIscartOpened: () => {},
  cartItems: [],
  AddItemToCart: () => {},
  RemoveItemFromCart: () => {},
  clearItemFromCart: () => {},
  itemsCount: 0,
  cartTotal: 0
});

// CART CONTEXT PROVIDER
export const CartContextProvider = ({ children }) => {
  const [isCartOpened, setIscartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [cartTotal, setcartTotal] = useState(0)

  // FUNCTION TO KEEP COUNT OF THE CART ITEMS
  useEffect(() => {
    const count = cartItems.reduce((accumulator, item) => {
      return accumulator + item.quantity;
    }, 0);
    setItemsCount(count);
  }, [cartItems]);


  // CART TOTAL
  useEffect(() => {
    const cartTotal = cartItems.reduce((accumulator, item) => {
      return accumulator + (item.quantity * item.price);
    }, 0);
    setcartTotal(cartTotal);
  }, [cartItems]);

  // function to controll adding items to cart.
  const AddItemToCart = (productToAdd) => {
    setCartItems(addItemToCartHelper(cartItems, productToAdd));
  };

  // function to controll removing items from the cart
  const RemoveItemFromCart = (itemToRemove) => {
    setCartItems(removeItemFromCartHelper(cartItems, itemToRemove));
  };

  // clear item from cart
  const clearItemFromCartHelper = (cartItems, productToClear) => {
    return cartItems.filter((item) => {
      return item.id !== productToClear.id;
    });
  };

  const clearItemFromCart = (productToClear) => {
    setCartItems(clearItemFromCartHelper(cartItems, productToClear));
  };

  const value = {
    isCartOpened,
    setIscartOpened,
    cartItems,
    AddItemToCart,
    RemoveItemFromCart,
    clearItemFromCart,
    itemsCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};