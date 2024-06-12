import React from "react";
import "./Footer.css";
import { useRef } from "react";

const Footer = () => {
  const getStartedRef = useRef(null);

  const text = {
    Get_Started: "Get Started with Art Microcemento ",
    Email: "Email",
  };
  return (
    <section id="siguenos" className="f-wrapper" ref={getStartedRef}>
      <div className="paddings flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="" alt="" width={250} />

          <span className="secondaryText">
            For the record,
            <br /> a mechanical engineer is responsable for how just about anything is built,
            <br /> We make sure any type of structure or vehicle or roadway is strong,
            <br /> safe and will stay together!
            <br />
            <br /> Kristan Higgins
          </span>
          <span className="flexColStart">
            <img src="" alt="" width={100} />
          </span>
        </div>
        <div className="flexColStart f-right">
          <h2>Information</h2>
          <span className="secondaryText">
            Calgary, AB,
            <br />
            Cell (587) 973-8122
          </span>
          <button className="button">
            <a href="mailto:potdarsarvesh12@gmail.com">{text.Email}</a>
          </button>

          <div className="flexCenter f-menu">
            <span>Proyectos</span>
            <span>Quines Somos</span>
            <span>Contactanos</span>
            <span>Comienzo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
