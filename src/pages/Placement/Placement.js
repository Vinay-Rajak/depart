import React from "react";
import "./Placement.css";
import AboutPlacement from "../../component/AboutPlacement/AboutPlacement.js";
import RecruiterPlacement from "../../component/RecruiterPlacement/RecruiterPlacement.js";
import Footer from "../../component/Footer/Footer.js";
function Placement() {
  return (
    <>
      <div className="main-placements">
        <AboutPlacement />
        <hr />
        <RecruiterPlacement />
        <hr />
        <div className="menter-team">
          <h1>Mentor Team List of Training and Placement Cell</h1>
          <table>
            <thead>
              <td>S.No.</td>
              <td>Name</td>
              <td> Department</td>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr Shikha Agrawal</td>
                <td>
                  Director , Training & Placement Associate Professor, CSE
                  Department
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Prof. Rajeev Pandey</td>
                <td> Associate Professor , CSE Department</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mr Santosh K Yadav</td>
                <td>Supporting Staff, Training & Placement</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Placement;
