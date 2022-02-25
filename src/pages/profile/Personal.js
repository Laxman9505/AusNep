import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import Button from "./../../components/Button/Button";
const Personal = () => {
  return (
    <div className="personal-container">
      <div className="top">
        <h1>Your Personal Details</h1>
        <h1>Credits $0.00</h1>
      </div>
      <div className="below">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
        <div className="details">
          <div className="item">
            <FaUserAlt className="icon" />
            <span>Maren Bergson</span>
          </div>
          <div className="item">
            <IoIosCall className="icon" />
            <span>+977 9816536151</span>
          </div>
          <div className="item">
            <MdEmail className="icon" />
            <span>marenbergson@gmail.com</span>
          </div>
          <div className="item">
            <AiFillCalendar className="icon" />
            <span>02/16/2020</span>
          </div>
          <Button text="Edit" style={{ marginTop: "1.5rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Personal;
