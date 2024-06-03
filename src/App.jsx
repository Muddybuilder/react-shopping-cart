import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header cartItems={cartItems} />
      <Outlet context={[cartItems, setCartItems]} />
    </>
  );
}
