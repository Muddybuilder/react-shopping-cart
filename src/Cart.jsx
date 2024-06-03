import { useOutletContext } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useOutletContext();
  let totalPrice = 0;

  return (
    <div className="cart-container">
      {cartItems.map(({ item, number }) => {
        totalPrice = totalPrice * item.price * number;
        return (
          <div key={item.title} className="cart-item">
            <div>
              <img src={item.image} height="100px" width="100px"></img>
            </div>
            <div>
              <p>{item.title}</p>
            </div>
            <div>
              <p>
                ${item.price} * {number}
              </p>
            </div>
            <div>
              <p>${item.price * number}</p>
            </div>
          </div>
        );
      })}
      <div className="cart-checkout">
        <div>
          <h3>
            Total: $
            {cartItems.reduce((accumulator, currentValue) => {
              return (
                accumulator + currentValue.item.price * currentValue.number
              );
            }, 0)}
          </h3>
        </div>
        <button
          onClick={() => {
            cartItems.length
              ? alert("Checkout Success!")
              : alert("Nothing to checkout!");
            setCartItems([]);
          }}
        >
          Checkout
        </button>
        <button
          onClick={() => {
            setCartItems([]);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
