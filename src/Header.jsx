import { Link } from "react-router-dom";
import "./Header.css";
import cartImg from "./assets/shopping-cart.svg";

export default function Header(cartItems) {
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
            <img src={cartImg} alt="Shopping Cart" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
