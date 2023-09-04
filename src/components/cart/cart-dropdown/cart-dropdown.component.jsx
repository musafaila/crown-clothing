import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss";

import Button from "../../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../../contexts/cart.context";

const CartDropdown = () => {
  const { isCartOpened, setIscartOpened, cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const checkoutHandler = () => {
    setIscartOpened(!isCartOpened);
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      {cartItems.map((item) => {
        return <CartItem key={item.id} cartItem={item} />;
      })}
      <Button onClick={checkoutHandler}>Check out</Button>
    </div>
  );
};

export default CartDropdown;
