import React from "react";
import "./Input.css";
const Input = (props) => {
  return (
    <input
      {...props}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      className="inputs"
    />
  );
};

export default Input;
