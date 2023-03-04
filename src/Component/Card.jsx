import React from "react";
import { IoMailOutline, IoChevronForward, IoPieChart } from "react-icons/io5";
import { IconContext } from "react-icons";
import image1 from "../assets/images/logo.png";

function Card() {
  return (
    <div className="service_container">
      <div className="title_wrapper">
        <span className="service-title">Our services</span>
        <h2>
          Save Time Managing Social Media <br /> For your Business
        </h2>
      </div>
      <div className="service_card">
        <div className="card">
          <span className="service_icon" style={{ backgroundColor: "#ddfbf9" }}>
            <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </span>
          <h3>
            Ui/Ux Design <br /> For Mobile & Web
          </h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </div>
        <div className="card">
          <span className="service_icon" style={{ backgroundColor: "#e7daf8" }}>
            <IconContext.Provider value={{ color: "#5700cf", size: "22px" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </span>
          <h3>
            Ui/Ux Design <br /> For Mobile & Web
          </h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </div>
        <div className="card">
          <span className="service_icon" style={{ backgroundColor: "#ffede6" }}>
            <IconContext.Provider value={{ color: "#ff8559", size: "22px" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </span>
          <h3>
            Ui/Ux Design <br /> For Mobile & Web
          </h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </div>
        <div className="card">
          <span className="service_icon" style={{ backgroundColor: "#ffe1e9" }}>
            <IconContext.Provider value={{ color: "#fa3970", size: "25px" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </span>
          <h3>
            Ui/Ux Design <br /> For Mobile & Web
          </h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </div>
        <div className="card">
          <span className="service_icon" style={{ backgroundColor: "#dcedff" }}>
            <IconContext.Provider value={{ color: "#56a8f4", size: "22px" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </span>
          <h3>
            Ui/Ux Design <br /> For Mobile & Web
          </h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </div>
        <div className="card">
          <span className="service_icon" style={{ backgroundColor: "#dbf9ed" }}>
            <IconContext.Provider value={{ color: "#06d786", size: "22px" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </span>
          <h3>
            Ui/Ux Design <br /> For Mobile & Web
          </h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </div>
        <div className="card">
          <span className="service_icon" style={{ backgroundColor: "#fffada" }}>
            <IconContext.Provider value={{ color: "#f1df11", size: "22px" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </span>
          <h3>
            Ui/Ux Design <br /> For Mobile & Web
          </h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </div>
        <div className="card dark">
          <img src={image1} alt="imageb" className="line" />
          <h2>
            +4 <br />
            More...
          </h2>
          <span className="service_icon" style={{ backgroundColor: "#dbf9ed" }}>
            <IconContext.Provider value={{ color: "#06d786", size: "22px" }}>
              <IoPieChart />
            </IconContext.Provider>
          </span>

          
        </div>
        
      </div>
    </div>
  );
}

export default Card;
