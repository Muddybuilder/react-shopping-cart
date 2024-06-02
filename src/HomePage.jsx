import "./HomePage.css";
import cargoShipImg from "/cargoship.jpg";
export default function HomePage() {
  return (
    <div className="home-page">
      <img className="cargo-bg" src={cargoShipImg} alt="Cargo Ship"></img>
      <h1>A Journey to you</h1>
      <p>Easier than ever, order now!</p>
    </div>
  );
}
