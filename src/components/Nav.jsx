import React from "react";
import "../styles/nav.css";

export default function () {
  return (
    <div className="wrapper-nav">
      <img className="logo" src="logo-inga.png" alt="" />
      <ul className="menu">
        <li>PROPUESTA</li>
        <li>NOSOTROS</li>
        <li>FORO</li>
      </ul>
    </div>
  );
}
