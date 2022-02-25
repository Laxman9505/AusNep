import React, { useState } from "react";
import "../login/Login.css";
import Image from "../../components/Image";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { email, password, firstName, lastName } = userData;
  const onChangeHandler = (e) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const submitHandler = () => {
    console.log("running");
  };
  return (
    <div className="login-container">
      <Link to="/" className="link">
        <Image />
      </Link>

      <div className="loginBox">
        <h2
          style={{
            marginBottom: "-5px",
            color: "#4a5f80",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Register to Classi Deals
        </h2>
        <div style={{ position: "relative", width: "100%" }}>
          <BiUser
            style={{
              position: "absolute",
              top: "15px",
              fontSize: "20px",
              marginLeft: "15px",
              color: "#40B566",
            }}
          />

          <Input
            value={firstName}
            onChange={(e) => onChangeHandler(e)}
            placeholder="FirstName*"
            name="firstName"
            className="input"
          />
        </div>
        <div style={{ position: "relative", width: "100%" }}>
          <BiUser
            style={{
              position: "absolute",
              top: "15px",
              fontSize: "20px",
              marginLeft: "15px",
              color: "#40B566",
            }}
          />
          <Input
            value={lastName}
            onChange={(e) => onChangeHandler(e)}
            placeholder="LastName*"
            name="lastName"
            className="input"
          />
        </div>
        <div style={{ position: "relative", width: "100%" }}>
          <MdEmail
            style={{
              position: "absolute",
              top: "15px",
              fontSize: "20px",
              marginLeft: "15px",
              color: "#40B566",
            }}
          />

          <Input
            value={email}
            onChange={(e) => onChangeHandler(e)}
            placeholder="email"
            name="email"
            className="input"
          />
        </div>
        <div style={{ position: "relative", width: "100%" }}>
          <RiLockPasswordFill
            style={{
              position: "absolute",
              top: "15px",
              fontSize: "20px",
              marginLeft: "15px",
              color: "#40B566",
            }}
          />
          <Input
            value={password}
            onChange={(e) => onChangeHandler(e)}
            placeholder="password"
            name="password"
            className="input"
          />
        </div>

        <div className="loginButton">
          <p style={{ color: "black", fontSize: "14px" }}>
            By signing up I agree to ClassiDeals <span>Terms of User </span> and
            <span> Privacy Policy</span> and I consent to receiving marketing
            from ClassiDeals and third party offers.
          </p>
          <button type="submit" value={"Login"} onClick={submitHandler}>
            Register
          </button>
        </div>
        <p>
          Already have a account with classy deals.
          <Link to={"/login"}>
            <span>Login?</span>
          </Link>
        </p>

        <button className="google">
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmJjMDJkIiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMS42NDksNC42NTctNi4wOCw4LTExLjMwMyw4Yy02LjYyNywwLTEyLTUuMzczLTEyLTEyCXM1LjM3My0xMiwxMi0xMmMzLjA1OSwwLDUuODQyLDEuMTU0LDcuOTYxLDMuMDM5bDUuNjU3LTUuNjU3QzM0LjA0Niw2LjA1MywyOS4yNjgsNCwyNCw0QzEyLjk1NSw0LDQsMTIuOTU1LDQsMjRzOC45NTUsMjAsMjAsMjAJczIwLTguOTU1LDIwLTIwQzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjZTUzOTM1IiBkPSJNNi4zMDYsMTQuNjkxbDYuNTcxLDQuODE5QzE0LjY1NSwxNS4xMDgsMTguOTYxLDEyLDI0LDEyYzMuMDU5LDAsNS44NDIsMS4xNTQsNy45NjEsMy4wMzkJbDUuNjU3LTUuNjU3QzM0LjA0Niw2LjA1MywyOS4yNjgsNCwyNCw0QzE2LjMxOCw0LDkuNjU2LDguMzM3LDYuMzA2LDE0LjY5MXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjNGNhZjUwIiBkPSJNMjQsNDRjNS4xNjYsMCw5Ljg2LTEuOTc3LDEzLjQwOS01LjE5MmwtNi4xOS01LjIzOEMyOS4yMTEsMzUuMDkxLDI2LjcxNSwzNiwyNCwzNgljLTUuMjAyLDAtOS42MTktMy4zMTctMTEuMjgzLTcuOTQ2bC02LjUyMiw1LjAyNUM5LjUwNSwzOS41NTYsMTYuMjI3LDQ0LDI0LDQ0eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMxNTY1YzAiIGQ9Ik00My42MTEsMjAuMDgzTDQzLjU5NSwyMEw0MiwyMEgyNHY4aDExLjMwM2MtMC43OTIsMi4yMzctMi4yMzEsNC4xNjYtNC4wODcsNS41NzEJYzAuMDAxLTAuMDAxLDAuMDAyLTAuMDAxLDAuMDAzLTAuMDAybDYuMTksNS4yMzhDMzYuOTcxLDM5LjIwNSw0NCwzNCw0NCwyNEM0NCwyMi42NTksNDMuODYyLDIxLjM1LDQzLjYxMSwyMC4wODN6Ij48L3BhdGg+PC9zdmc+"
          />
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
