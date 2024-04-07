import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import "./Nav.css";

function Nav() {
  let [toggle, setToggle] = useState(true);
  let [show, setShow] = useState("hide-nav");

  function NavClick() {
    setShow("hide-nav");
    setToggle(true);
  }

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
          <NavLink exact to="/" onClick={NavClick}>
            Home
          </NavLink>
          <NavLink exact to="/about" onClick={NavClick}>
            {" "}
            About Us
          </NavLink>
          <NavLink exact to="/Department" onClick={NavClick}>
            Department Profile{" "}
          </NavLink>
          <NavLink exact to="/student" onClick={NavClick}>
            Student
          </NavLink>
          <NavLink exact to="/faculty" onClick={NavClick}>
            Faculty
          </NavLink>
          <NavLink exact to="/placement" onClick={NavClick}>
            Placement
          </NavLink>
          <NavLink exact to="/contact" onClick={NavClick}>
            Contect Us
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
