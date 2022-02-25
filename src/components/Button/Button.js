import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      {...props}
      className="animated-button"
      id="button"
      style={props.style}
    >
      <span>
        {props.children}
        {props.text}
      </span>
    </button>
  );
};

export default Button;
