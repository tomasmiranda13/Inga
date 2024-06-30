import React from "react";
import "../styles/card.css";
export default function Card(props) {
  return (
    <div>
      <div className="card-wrapper">
        <img src={props.img} alt="" />
        <div className="name-grade">
          <h6>{props.name}</h6>
          <span>{props.grade}</span>
        </div>
      </div>
    </div>
  );
}
