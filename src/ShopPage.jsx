import { useState, useEffect } from "react";
import "./ShopPage.css";
const useFakeProductURL = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=40")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, error, loading };
};

function Card({ item }) {
  const [number, setNumber] = useState(0);

  return (
    <div className="card">
      <img src={item.image} height="150px" width="150px"></img>
      {item.title}
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
      <button type="button">Add to Cart</button>
    </div>
  );
}

export default function ShopPage() {
  const { products, error, loading } = useFakeProductURL();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <ul className="product-list">
      {products.map((item) => {
        return (
          <li key={item.id}>
            <Card item={item} />
          </li>
        );
      })}
    </ul>
  );
}
