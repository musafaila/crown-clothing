import { Fragment } from "react";

import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <div className="logo">Logo</div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
        </div>
        <h1>I am the Nav Bar</h1>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
