import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./styles/mainPage.css";
import Proposal from "./Proposal";

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
      <Footer />
    </div>
  );
}
