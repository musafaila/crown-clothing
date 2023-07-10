import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

// IMPORT RELATED TO STYLINGS
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

// IMPORTS RELATED AUTHENTICATION
import { userContext } from "../../contexts/user.context";
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";

// IMPORTS RELATED TO CART
import CartIcon from "../../components/cart/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(userContext);
  const { isCartOpened } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutAuthUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpened && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
