import { useState, useEffect } from "react";
import "./ShopPage.css";
import Card from "./Card";
import { useOutletContext } from "react-router-dom";
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

export default function ShopPage() {
  const { products, error, loading } = useFakeProductURL();
  const [cartItems, setCartItems] = useOutletContext();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className="product-list">
      {products.map((item) => {
        return (
          <Card
            key={item.id}
            item={item}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        );
      })}
    </div>
  );
}
