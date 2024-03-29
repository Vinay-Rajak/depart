import React from "react";
import "./Footer.css";
import { IoCall } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { IoMdCalculator } from "react-icons/io";

function Footer() { 
  return (
    <>
      <div className="footer">
        <hr />
        <div className="top-footer">
          <h3>Get in Touch With Us</h3>
          <div className="in-top-footer flex-div">
            <p>
              <IoLocation /> Narsingharh By pass Road, Near Gandhi Nagar, Bhopal
              M.P
            </p>
            <p>
              <IoMailSharp /> uit_director@rgtu.net
            </p>
            <p>
              <IoCall /> +(91)-(755)-2678812
            </p>
            <p>
              <IoMdCalculator /> +(91)-(755)-2678819
            </p>
          </div>
        </div>
        <hr />
        <div className="bottom-footer">
          <p>© 2024 UIT-RGPV . All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
