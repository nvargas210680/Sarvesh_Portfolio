import React from "react";
import "./Background.css";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className=" g-container flexColCenter innerWidth ">
      <motion.div initial={{ x: "7rem", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, type: "tween" }}>
        <img className="" src="/background.jpeg" />
      </motion.div>

      <div className="b-text innerWidth">
        <div className="transbox">
          MASTER OF MECHANICAL AND MANUFACTURING ENGINEERING | UNIVERSITY OF CALGARY | JAN 2021 – DEC 2022
          <br />
          <br /> ● Related coursework: Stress Corrosion Cracking of Materials, Elements of Materials Engineering,
          <br /> Pipeline Coating, Fracture Mechanics, Sustainability, Thermal Systems Analysis,
          <br />
          Environmental Fluid Mechanics, Combustion Processes, Fundamentals of Pipeline Economics, Introduction to Digital Engineering.
          <br />
          Skills & Abilities TECHNICAL SKILLS,
          <br /> ● CAD/CAM, Microsoft Office Suite (Word, Excel, PowerPoint), MS Project, Inventor TOOLS AND SOFTWARE,
          <br /> ● AutoCAD, SolidWorks, Photoshop SOFT SKILLS
          <br /> ● Project Management, Leadership, Adaptability, Time management, Attention to detail, Verbal and Written Communication,
          <br /> Problem-solving, Analytical and Interpretational, Self-Motivated. HARD SKILLS
          <br /> ● Reading and Interpreting Engineering drawings, Preparation of BOM
        </div>
      </div>
    </div>
  );
};

export default Background;
