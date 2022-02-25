import React, { useEffect, useState } from "react";
import "./Payment.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../components/Button/Button";

const Payment = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const { productId } = useParams();
  const [activePayment, setActivePayment] = useState("paypal");
  useEffect(() => {
    const getProductDetails = async () => {
      const response = await axios
        .get("https://classibazaar.com.au/api/deal/featured_deals/")
        .catch((err) => {
          console.log(err);
        });
      setProductDetails(response.data);
    };
    getProductDetails();
  }, [productId]);

  const singleProductDetail = productDetails.filter((element) => {
    return element.id === productId;
  });

  return (
    <>
      <Navbar />
      {singleProductDetail.map((product) => (
        <div className="payment" key={product.id}>
          <div className="paymentLeft">
            <h2>Payment Details</h2>
            <div className="paymentForm">
              {/* <h3>Choose Payment Method Below</h3> */}
              {/* <div className="methods">
                <div
                  onClick={() => setActivePayment("paypal")}
                  className={
                    activePayment == "paypal" ? "method active" : "method"
                  }
                >
                  <img src="/images/paypal.png" alt="" />
                  <p>Pay with paypal</p>
                </div>
                <div
                  onClick={() => setActivePayment("visa")}
                  className={
                    activePayment == "visa" ? "method active" : "method"
                  }
                >
                  <img src="/images/visa.png" alt="" />
                  <p>Pay with Visa</p>
                </div>
                <div
                  onClick={() => setActivePayment("masterCard")}
                  className={
                    activePayment == "masterCard" ? "method active" : "method"
                  }
                >
                  <img src="/images/mastercard.png" alt="" />
                  <p>Pay with Master Card</p>
                </div>
              </div> */}
              <form>
                <h3>Credit Card Information</h3>
                <label>
                  <span style={{ color: "red" }}>*</span> Name on the card
                </label>
                <input type="text" placeholder="Name on the card" />
                <label>Credit card number</label>
                <input type="number" placeholder="1234 1234 1234 1234" />
                <div className="paymentFix">
                  <div className="paymentFixChild">
                    <label>Expiration Date</label>
                    <DatePicker
                      className="date"
                      selected={startDate}
                      open={false}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="MM/yy"
                    />
                  </div>
                  <div className="paymentFixChild">
                    <label>CVC</label>
                    <input type="number" placeholder="CVC" />
                  </div>
                </div>
                <div className="bill-and-promo">
                  <div className="paymentPromo">
                    <div className="paymentCode">
                      <label>Promo Code</label>
                      <input type="text" />
                    </div>
                    <Button
                      style={{ width: "100px" }}
                      text="Apply here"
                    ></Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="paymentRight">
            <h3 style={{ fontSize: " 18px" }}>Order Summary</h3>
            <div className="reviewBox">
              {/* <h3>Review Order</h3> */}
              <div className="paymentReview">
                <div className="reviewLeft">
                  <h3 style={{ marginBottom: "-10px" }}>ITEM</h3>
                  <div className="image-row">
                    <img
                      style={{ height: "120px", width: "120px" }}
                      src={product.image.thumbnail}
                      alt=""
                      className="paymentImg"
                    />
                    <div className="reviewRight">
                      <div className="paymentQty">
                        <h3>QTY</h3>
                        <p>1</p>
                      </div>
                    </div>
                    <div className="paymentTotal">
                      <h3>TOTAl</h3>
                      <p>{product.actual_price}</p>
                    </div>
                  </div>
                  <h3>{product.dealstitle}</h3>
                  <p>{product.subtitle}</p>
                </div>
              </div>
              <div className="reviewBottom">
                <div className="paymentGrandTotal">
                  <h3>Subtotal</h3>
                  <h3>${product.product_price}</h3>
                </div>
                <div className="paymentGrandTotal">
                  <h3>Discount</h3>
                  <h3>-${(product.product_price * product.discount) / 100}</h3>
                </div>
                <div className="paymentGrandTotal">
                  <h3 style={{ fontWeight: "bold" }}>Grand Total</h3>
                  <h3>${product.actual_price}</h3>
                </div>
              </div>
              <div className="paymentReviewBtns">
                <Button
                  style={{
                    width: "100%",
                    padding: "8px 0",
                  }}
                >
                  PROCEED ORDER
                </Button>
                <button style={{ backgroundColor: "#ea4335" }}>
                  CANCEL ORDER
                </button>
              </div>
            </div>
            <div className="paymentReviewBtns">
              <Link className="link" to={`/gift/${product.id}`}>
                <Button
                  style={{
                    width: "100%",
                    padding: "8px 0",
                  }}
                >
                  Give as a Gift
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default Payment;
