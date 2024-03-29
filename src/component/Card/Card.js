import React from "react";
import "./Card.css";

function Card({ heading, content, icon }) {
  return (
    <>
      <div className="main-card">
        <div className="card-icon">{icon}</div>
        <h3>{heading}</h3>
        <p>{content}</p>
      </div>
    </>
  );
} 
export default Card;
