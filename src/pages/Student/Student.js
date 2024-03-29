import React from "react";
import "./Student.css";
import Calender from "../../component/Calender/Calender.js";
import Footer from "../../component/Footer/Footer.js";
import Ragging from "../../component/Ragging/Ragging.js";

function Student() {
  return (
    <>
      <div className="main-student">
        <Calender />
        <Ragging />
      </div>
      <Footer />
    </>
  );
}

export default Student;
