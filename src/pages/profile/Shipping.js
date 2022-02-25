import React from "react";
import Button from "../../components/Button/Button";

const Shipping = () => {
  return (
    <div className="shipping-container payment-method-container">
      <h1 className="title">Shipping Address</h1>
      <div className="top-container">
        <div>
          There aren't any shipping address associated with this account.
        </div>
      </div>
      <div className="below-container">
        <p className="title">Add Shipping Address</p>
        <div className="image-and-form-container">
          <form className="form-container" style={{ width: "100%" }}>
            <div className="input-container">
              <label htmlFor="">Name of the company (Optional)</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label htmlFor="">Shipping Address</label>
              <input type="text" />
            </div>
            <div className="small-div" style={{ width: "100%" }}>
              <div>
                <label htmlFor="">Phone Number</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Pin Code</label>
                <input type="text" />
              </div>
            </div>
            <div className="small-div" style={{ width: "100%" }}>
              <div>
                <label htmlFor="">Zip Code</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Country</label>
                <input type="text" />
              </div>
            </div>
            <Button text="Save" style={{ width: "98%" }} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
