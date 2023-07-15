import { useContext } from "react";

import "./cart-dropdown.styles.scss";

import  Button  from "../../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      {cartItems.map((item) => {
        return <CartItem key={item.id} cartItem={item} />;
      })}
      <Button>Check out</Button>
    </div>
  );
};

export default CartDropdown;