import { useState } from "react";
import "./Card.css";

export default function Card({ item, cartItems, setCartItems }) {
  const [number, setNumber] = useState(0);

  return (
    <div className="card">
      <img className="product-img" src={item.image}></img>
      <div className="text-container">
        <p>{item.title}</p>
        <p>${item.price}</p>
        <div className="button-container">
          <div className="product-select">
            <button
              type="button"
              onClick={() => setNumber(number > 0 ? number - 1 : 0)}
            >
              -
            </button>
            <input
              type="number"
              min={0}
              value={number.toString()}
              onChange={(e) => setNumber(+e.target.value)}
            ></input>
            <button type="button" onClick={() => setNumber(number + 1)}>
              +
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              let newArr = [...cartItems];
              if (number) {
                const idx = newArr.map((e) => e.item.id).indexOf(item.id);
                if (idx !== -1) {
                  newArr[idx].number += number;
                } else {
                  newArr.push({ item: item, number: number });
                }
                setCartItems(newArr);
              }

              setNumber(0);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
