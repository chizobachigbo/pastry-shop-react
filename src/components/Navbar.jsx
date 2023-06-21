import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import Wishlist from "../pages/Wishlist";

export default function Navbar({cartSelection, wishlistSelection}) {
  const location = useLocation();   
  const cartCount= cartSelection.length;
  const wishlistCount = wishlistSelection.length;

  return (
    <>
      <div className="navbar container">
        <div className="name-logo">
          <Link to="pastry-shop-react/" href="!#" className="company-logo"><img src="store-logo.png"></img> </Link>
          <Link to="pastry-shop-react/" href="!#" className="company-name">
            Dennie's
          </Link>
        </div>

        <div className="nav-links">
          <NavLink
            className={
              location.pathname === "pastry-shop-react/" ? "active home" : "home"
            }
            to="pastry-shop-react/"
          >
            Home
          </NavLink>
          <NavLink
            className={
              location.pathname === "/shop" ? "active shop" : "shop"
            }
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={
              location.pathname === "/wishlist" ? "active wishlist" : "wishlist"
            }
            to="/wishlist"
          >
            <BsFillHeartFill />
            <div className="wishlist__count">{wishlistCount}</div>
          </NavLink>
          <NavLink
            className={location.pathname === "/cart" ? "active cart" : "cart"}
            to="/cart"
          >
            <BsFillCartFill />
            <div className="cart__count">{cartCount}</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
