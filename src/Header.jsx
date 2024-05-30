import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
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
            <img src="./src/assets/shopping-cart.svg" alt="Shopping Cart" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
