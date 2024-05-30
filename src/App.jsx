import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function App() {
  const [cartItem, setCartItem] = useState([]);
  //TODO: Propagate cartItem, setCartItem to children components
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
