import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <section className="preloader">
      <div className="preloader__container">
        <span className="preloader__pulse"></span>
      </div>
    </section>
  );
};

export default Preloader;
