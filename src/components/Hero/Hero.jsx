import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* {left side} */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="gears">
              <img src="/gears2.jpeg" alt="" />
            </div>
            <motion.h1 initial={{ y: "2rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 6, type: "spring" }}>
              Sarvesh Potdar
              <br />
              Mechanical Engineer
            </motion.h1>
            <div className="">
              <span>Master's Degre, University Of Calgary</span>
            </div>
          </div>
        </div>
        {/* {right side} */}
        <div className="flexCenter hero-right">
          <motion.div initial={{ x: "7rem", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 6, type: "spring" }} className="image-container">
            <img src="/sarvesh_headshot.jpeg" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
