import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import "./Nav.css";

function Nav() {
  let [toggle, setToggle] = useState(true);
  let [show, setShow] = useState("hide-nav");

  return (
    <>
      <div className="main-nav">
        <div className="moblie-nav">
          {toggle ? (
            <CgMenuRightAlt
              style={{ fontSize: "2em" }}
              onClick={() => {
                setToggle(false);
                setShow("nav");
              }}
            />
          ) : (
            <CgCloseO
              style={{ fontSize: "2em" }}
              onClick={() => {
                setToggle(true);
                setShow("hide-nav");
              }}
            />
          )}
        </div>
        <div className={show}>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/about">
            {" "}
            About Us
          </NavLink>
          <NavLink exact to="/Department">
            Department Profile{" "}
          </NavLink>
          <NavLink exact to="/student">
            Student
          </NavLink>
          <NavLink exact to="/faculty">
            Faculty
          </NavLink>
          <NavLink exact to="/placement">
            Placement
          </NavLink>
          <NavLink exact to="/contact">
            Contect Us
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
