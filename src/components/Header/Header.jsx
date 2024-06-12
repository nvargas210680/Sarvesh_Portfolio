import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img className="logoSize" src="/ucalgary.jpeg" alt="" />
        <div className="flexCenter h-menu">
          <a href="">R</a>

          <a href="">Biography</a>
          <a href="">Projects</a>
          <a href=""></a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
