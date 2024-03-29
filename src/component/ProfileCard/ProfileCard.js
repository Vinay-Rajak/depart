import React from "react";
import "./ProfileCard.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function ProfileCard({
  address,
  name,
  designation,
  experience,
  mail,
  phone,
  post,
}) {
  return (
    <>
      <div className="card">
        <div className="photo">
          <img src={address} alt="photo" />
        </div>
        <div className="content">
          <h3> {name}</h3>
          <p>
            <span>Designation </span>: {designation}
          </p>
          <p>
            <span>Year of Experience </span>:{experience}
          </p>

          <p>
            <span>Level of Post</span>: {post}
          </p>
          <div className="icon">
            <a href={mail} target="black">
              {" "}
              <FaEnvelope />
            </a>
            <a href={phone} target="black">
              {" "}
              <FaPhoneAlt />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfileCard;
