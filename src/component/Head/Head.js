import React from "react";
import "./Head.css";

function Head() {
  return (
    <>
      <div className="strip"></div>
      <div className="head flex-div">
        <img src="https://www.uitrgpv.ac.in/imagesn/rgpv-logo.jpg" alt="logo" />
        <div className="content">
          <h1>University Institute of Technology, RGPV</h1>
          <h3>Department of Computer Science </h3>
        </div>
      </div>
    </>
  );
}

export default Head;
