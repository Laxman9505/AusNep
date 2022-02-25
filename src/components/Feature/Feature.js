import React from "react";
import "./Feature.css";

const Feature = ({ title, subtitle, imageLink }) => {
  return (
    <div className="container">
      <img src={imageLink} alt="" />
      <div className="second-container">
        <span>{title}</span>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Feature;
