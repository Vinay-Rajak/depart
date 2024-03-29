import React from "react";
import "./Home.css";
import Head from "../../component/Head/Head.js";
import Nav from "../../component/nav/Nav.js";
import Welcome from "../../component/Welcome/Welcome.js";
import Footer from "../../component/Footer/Footer.js";
import Slider from "../../component/Slider/Slider.js";
import Data from "../../Data/CardData.js";
import Card from "../../component/Card/Card.js";
import Infastructure from "../../component/Infastructure/Infastructure.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home() {
  return (
    <>
      <div className="main">
        <Welcome />

        <div className="Gallery">
          <h1
            style={{
              textAlign: "center",
              padding: ".5em 0",
              fontSize: "2.8em",
              backgroundColor: "#ffdd11",
              fontWeight: "900",
            }}
          >
            Gallery
          </h1>
          <div className="img flex-div">
            <Slider />
          </div>
        </div>
        <Infastructure />
        <Footer />
      </div>
    </>
  );
}

export default Home;
