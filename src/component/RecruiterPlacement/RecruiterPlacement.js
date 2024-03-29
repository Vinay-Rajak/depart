import React from "react";
import "./RecruiterPlacement.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function RecruiterPlacement() {
  return (
    <>
      <div className="company">
        <h1>MAJOR RECRUITERS</h1>
        <div className="in-company">
          <Carousel
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
              },
            }}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={1500}
            showDots={false}
            arrows={false}
            draggable={true}
            containerClass="carousel-container"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/TCS_NewLogo_Final_RGB.png/800px-TCS_NewLogo_Final_RGB.png?20220629103834"
              alt="logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/400px-Infosys_logo.svg.png?20100302211036"
              alt="logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/IBM_logo_in.jpg/640px-IBM_logo_in.jpg"
              alt="logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/640px-Accenture.svg.png"
              alt="logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/640px-Wipro_Primary_Logo_Color_RGB.svg.png"
              alt="logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bajaj_Finserv_Logo.svg/640px-Bajaj_Finserv_Logo.svg.png"
              alt="logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hindustan_Computers_logo.svg/640px-Hindustan_Computers_logo.svg.png"
              alt="logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/640px-Cognizant_logo_2022.svg.png"
              alt="logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Deloitte-logo-black.svg/640px-Deloitte-logo-black.svg.png"
              alt="logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tech_Mahindra_New_Logo.svg/640px-Tech_Mahindra_New_Logo.svg.png"
              alt="logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_201x_logo.svg/640px-Capgemini_201x_logo.svg.png"
              alt="logo"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default RecruiterPlacement;
