import React from "react";
import "./Software.css";
import { motion } from "framer-motion";

const Software = () => {
  return (
    <section className="s-warpper paddings">
      <h2 className="s-title flexCenter paddings">Tools And Software</h2>
      <motion.div initial={{ y: "7rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 20, type: "spring" }}>
        <div className="paddings innerWidth flexCenter s-container">
          <img src="./AutoCAD-logo.jpeg" alt="" width={200} />
          <img src="./SolidWorks_Logo.jpeg" alt="" width={200} />
          <img src="./photoshop.jpeg" alt="" width={200} />
        </div>
      </motion.div>
    </section>
  );
};

export default Software;
