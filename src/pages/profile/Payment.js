import React from "react";
import creditImage from "../../../src/images/c.png";
import Button from "../../components/Button/Button";
const Payment = () => {
  return (
    <div className="payment-method-container">
      <h1 className="title">Payment Methods</h1>
      <div className="top-container">
        <div>You haven't saved any credit cards</div>
      </div>
      <div className="below-container">
        <p className="title">Add New Card</p>
        <div className="image-and-form-container">
          <img src={creditImage} alt="" />
          <form className="form-container">
            <div className="input-container">
              <label htmlFor="">Name on the Card</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label htmlFor="">Credit Card Number</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label htmlFor="">Billing Address</label>
              <input type="text" />
            </div>
            <div className="small-div">
              <div style={{ width: "44%" }}>
                <label htmlFor="">Security Code</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Expiration Date</label>
                <input type="text" />
              </div>
            </div>
            <div className="small-div">
              <div style={{ width: "44%" }}>
                <label htmlFor="">Town City</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Postcode</label>
                <input type="text" />
              </div>
            </div>
            <Button text="Add" style={{ width: "96.5%" }} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
