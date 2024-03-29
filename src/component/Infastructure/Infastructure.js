import React from "react";
import "./Infastructure.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from "../../Data/CardData.js";
import Card from "../../component/Card/Card.js";

function Infrastructure() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="infa">
        <div className="infa-content">
          <h4>Infrastructure and Facilities</h4>
          <p>
            The Training & Placement Office, UIT Bhopal facilitates the process
            of placement of students passing out from the Institute besides
            collaborating with leading organizations and institutes in setting
            up of internship and training program of students.
          </p>
        </div>

        <div className="infa-slider ">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={1500}
            showDots={true}
            arrows={false}
            containerClass="carousel-infra"
          >
            {Data.map((item) => {
              return (
                <Card
                  heading={item.heading}
                  content={item.content}
                  icon={item.icon}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Infrastructure;
