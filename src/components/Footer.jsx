import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <img className="logo" src="logo-blanco.png" alt="" />
        <div className="ubication">
          <img className="icon" src="pasador-de-ubicacion.png" alt="" />
          <span>Cuenca, Castilla la mancha</span>
        </div>
      </div>
    </footer>
  );
}
