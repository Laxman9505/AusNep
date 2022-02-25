import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Card, Image } from "react-bootstrap";
import "./Login.css";
import Image1 from "../../components/Image";
import Input from "../../components/Input";
import { GoogleLogin } from "react-google-login";
import { useContext } from "react";
import { authContext } from "../../globalState";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { refreshTokenSetup } from "../../utils/RefreshToken";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { login } from "../../actions/login";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import axios from "axios";

const clientId =
  "484800453002-c50t3gka26sols4g2pva4alunj8hcpve.apps.googleusercontent.com";
const Login = ({ login, error, isLoggedIn, loading, token }) => {
  const dispatch = useDispatch();
  const [loginn, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userData;
  const onChangeHandler = (e) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const submitHandler = async () => {
    if (!email || !password) {
      return toast.error("Please enter both email and password");
    }
    // try {
    //   const res = await axios.post("", JSON.stringify(userData), {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }
    dispatch({
      type: "Authenticate_User_Request",
      payload: {
        email,
        password,
      },
    });

    if (error) {
      return toast.error(error);
    }
    setUserData({
      email: "",
      password: "",
    });
  };

  const onSuccess = (res) => {
    console.log("Login Successfull", res.profileObj);
    localStorage.setItem("googleId", res.profileObj.googleId);
    // refreshTokenSetup(res);
    navigate("/");
  };

  const onFailure = (res) => {
    console.log("Login Failed", res);
  };
  if (loading) {
    return <Spinner wrapperClass="loginBox" />;
  }
  if (token) {
    setCookie("token", token, { path: "/" });
  }
  if (isLoggedIn) {
    navigate("/");
  }

  return (
    <div
      className="login-container
    "
    >
      <Image1 />
      <div className="loginBox">
        <div className="top">
          <h2>Welcome Back</h2>
          <p>Enter your credentials to access your account.</p>
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
            placeholder="Enter your email"
            name="email"
            className="input"
            required
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
            type="password"
            onChange={(e) => onChangeHandler(e)}
            placeholder="Enter your password"
            name="password"
            className="input"
            required
          />
        </div>

        <div className="loginButton">
          <p>Forgot Password?</p>
          <button type="button" value={"Login"} onClick={submitHandler}>
            Login
          </button>
        </div>
        <p>
          Dont have a account with classy deals.
          <Link to={"/signup"}>
            <span>sign up?</span>
          </Link>{" "}
        </p>
        <p className="or">OR</p>

        <GoogleLogin
          className="google"
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy="single_host_origin"
        />
        {/* 
        <Card style={{ width: "100%" }}>
          <Card.Header>
            {!loginn && (
              <FacebookLogin
                appId="514800716442402"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,user_friends"
                callback={responseFacebook}
                icon="fa-facebook"
              />
            )}
            {loginn && <Image src={picture} roundedCircle />}
          </Card.Header>
          {loginn && (
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.email}</Card.Text>
            </Card.Body>
          )}
        </Card> */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    error: state.login.error,
    isLoggedIn: state.login.isLoggedIn,
    loading: state.login.loading,
    token: state.login.token,
    isLoggedIn: state.login.isLoggedIn,
  };
};

export default connect(mapStateToProps, { login })(Login);
