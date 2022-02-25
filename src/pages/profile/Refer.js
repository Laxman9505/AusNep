import React from "react";
import Button from "../../components/Button/Button";

const Refer = () => {
  return (
    <div className="refer-container payment-method-container">
      <h1 className="title">Refer a Friend</h1>
      <div className="top-container">
        <div>
          Refer a friend to earn your first $10.00 in Classideals Bucks and also
          maybe a Best Buddy Ever trophy.
        </div>
      </div>
      <h1 className="title">Referral Link</h1>
      <div className="top-container">
        <div>
          https://classibazaar.com.au/sign-up.html/7476eb42d75346ef7613479bc276bccc
        </div>
      </div>
      <Button text="Copy" style={{ width: "25%" }} />
    </div>
  );
};

export default Refer;
