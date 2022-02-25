import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from "react-loader-spinner";
import Loader from "react-loader";

const Spinner = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <BallTriangle
        wrapperStyle={{}}
        height="100"
        width="100"
        color="#40B566"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Spinner;
