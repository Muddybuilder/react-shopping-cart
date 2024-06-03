import { Link } from "react-router-dom";
import "./Header.css";
import cartImg from "./assets/shopping-cart.svg";

export default function Header({ cartItems }) {
  return (
    <nav className="navi">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <button>
            <span>{cartItems.length}</span>
            <Link to="/cart">
              <img src={cartImg} alt="Shopping Cart" height="100%" />
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
