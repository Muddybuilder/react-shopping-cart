import { Link, Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <h1>Hello</h1>
      <Link to="/home">Home</Link>
      <Link to="/shop">Shop</Link>
      {<Outlet />}
    </>
  );
}
