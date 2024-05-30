import { useState, useEffect } from "react";

const useFakeProductURL = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      {products.map((item) => {
        return (
          <li key={item.id}>
            <img src={item.image} height="150px" width="150px"></img>
            {item.title}
          </li>
        );
      })}
    </>
  );
}
