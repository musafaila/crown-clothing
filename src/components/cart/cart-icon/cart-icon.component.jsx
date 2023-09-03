import { useContext } from "react";

import "./cart-icon.styles.scss";
import { ReactComponent as CartSvgIcon } from "../../../assets/shopping-bag.svg";

import { CartContext } from "../../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpened, setIscartOpened, itemsCount } = useContext(CartContext);

  const toggleCartDropdown = () => {
    setIscartOpened(!isCartOpened);
  };

  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <CartSvgIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

export default CartIcon;
