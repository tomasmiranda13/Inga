import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./styles/mainPage.css";
import Proposal from "./Proposal";
import Card from "./components/Card";

export default function MainPage() {
  return (
    <div id="wrapper">
      <Nav />
      <div className="front-page">
        <div className="frame-div">
          <div className="frame t-100"></div>
          <div className="frame t-50"></div>
          <div className="frame t-30"></div>
        </div>
        <div className="main-img-div">
          <img className="main-img" src="main-image.jpg" alt="" />
        </div>
      </div>
      <Proposal />
      <div className="wrapper-we-are">
        <h2>Somos profesionales</h2>
        <div className="cards-center">
          <Card
            img={"imagen-doc.png"}
            name={"Gabriela Frontan"}
            grade={"Odontologa"}
          />
          <Card
            img={"imagen-doc.png"}
            name={"Ines Bañon"}
            grade={"Higienista dental"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
