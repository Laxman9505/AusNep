import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FaUserAlt } from "react-icons/fa";
import { GiCube } from "react-icons/gi";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdMobileFriendly } from "react-icons/md";
import Personal from "./Personal";
import "./Profile.css";
import Purchase from "./Purchase";
import Payment from "./Payment";
import Shipping from "./Shipping";
import Refer from "./Refer";

const Profile = () => {
  const [active, setActive] = useState("personal");
  return (
    <div>
      <Navbar />
      <div className="profile_container">
        <div className="profile_left">
          <div
            className={active == "personal" ? "item active" : "item"}
            onClick={() => setActive("personal")}
          >
            <FaUserAlt className="icon" />
            <span>Personal Details</span>
          </div>
          <div
            className={active == "purchase" ? "item active" : "item"}
            onClick={() => setActive("purchase")}
          >
            <GiCube className="icon" />
            <span>My purchase</span>
          </div>
          <div
            className={active == "payment" ? "item active" : "item"}
            onClick={() => setActive("payment")}
          >
            <BsFillCreditCard2BackFill className="icon" />
            <span>Payment Methods</span>
          </div>
          <div
            className={active == "shipping" ? "item active" : "item"}
            onClick={() => setActive("shipping")}
          >
            <FaShippingFast className="icon" />
            <span>Shipping Address</span>
          </div>
          <div
            className={active == "friend" ? "item active" : "item"}
            onClick={() => setActive("friend")}
          >
            <MdMobileFriendly className="icon" />
            <span>Refer a Friend</span>
          </div>
        </div>
        <div className="profile-right">
          {active == "personal" && <Personal />}
          {active == "purchase" && <Purchase />}
          {active == "payment" && <Payment />}
          {active === "shipping" && <Shipping />}
          {active === "friend" && <Refer />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
