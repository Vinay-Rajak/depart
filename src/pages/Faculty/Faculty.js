import React from "react";
import "./Faculty.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import ProfileCard from "../../component/ProfileCard/ProfileCard.js";
import Footer from "../../component/Footer/Footer.js";
import { Regular, NonRegular } from "../../Data/FacultyData.js";

/*address,name,designation,experience,mail,phone,post*/
function Faculty() {
  return (
    <>
      <div className="regular ">
        <h1>Regular Teaching Staff</h1>
        <div className="show flex-div">
          {Regular.map((items) => {
            return (
              <ProfileCard
                address={items.img}
                name={items.name}
                designation={items.designation}
                experience={items.experience}
                mail={items.mail}
                phone={items.phone}
                post={items.post}
              />
            );
          })}
        </div>

        <h1>Non-Regular Teaching Staff</h1>
        <div className="show flex-div">
          {NonRegular.map((items) => {
            return (
              <ProfileCard
                address={items.img}
                name={items.name}
                designation={items.designation}
                experience={items.experience}
                mail={items.mail}
                phone={items.phone}
                post={items.post}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faculty;
