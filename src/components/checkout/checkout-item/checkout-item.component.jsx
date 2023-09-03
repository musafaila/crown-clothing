import { useContext } from "react";

import { CartContext } from "../../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutCard = ({ cartItem }) => {
  const { AddItemToCart, RemoveItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const { name, price, imageUrl, quantity } = cartItem;

  const addItemToCartHandler = () => {
    AddItemToCart(cartItem);
  };

  const removeFromCartHandler = () => {
    RemoveItemFromCart(cartItem);
  };

  const clearItemFromCartHandler = () => {
    clearItemFromCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span  className="arrow" onClick={removeFromCartHandler}>&#10094;</span>
        {quantity}
        <span  className="arrow" onClick={addItemToCartHandler}>&#10095;</span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button">
        <button onClick={clearItemFromCartHandler}>&#10005;</button>
      </div>
    </div>
  );
};

export default CheckoutCard;
