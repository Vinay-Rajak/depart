import React from "react";
import "./Contact.css";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import Footer from "../../component/Footer/Footer.js";

function Contact() {
  return (
    <>
      <div className="main-contact">
        <h1>CONTACT US</h1>
        <div className="in-contact flex-div">
          <div className="address">
            <h2>
              {" "}
              <a
                href="https://www.google.com/maps/place/University+Institute+of+Technology+RGPV/@23.3101737,77.3594687,17z/data=!4m6!3m5!1s0x397c663a2f02fc89:0x12a6b478bbd192f1!8m2!3d23.3101737!4d77.3616574!16s%2Fg%2F112yfdnfk?entry=ttu"
                target="blank"
              >
                <IoLocationSharp /> Our Address
              </a>
            </h2>
            <p>
              University Institute of Technology, RGPV Bhopal <br />
              Airport Bypass Road, Gandhi Nagar,
              <br />
              Bhopal – 462 036 (M.P.) India
            </p>
          </div>
          <hr />
          <div className="link flex-div">
            <div className="email">
              <h2>
                <a href="mailto:uit_director@rgtu.net" target="blank">
                  <IoMail />
                  Email{" "}
                </a>
              </h2>
              <p>uit_director@rgtu.net</p>
            </div>
            <div className="phone">
              <h2>
                <a href="tel:+91-(0755)-2678812" target="blank">
                  <IoCall />
                  Phone{" "}
                </a>
              </h2>
              <p>+91-(0755)-2678812</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
