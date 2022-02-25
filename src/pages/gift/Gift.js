import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../components/Button/Button";

const Gift = () => {
  const [productDetails, setProductDetails] = useState([]);
  const { productId } = useParams();
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
      <div className="payment">
        <div className="paymentLeft">
          <h2>Customize Your Gift</h2>
          <div className="paymentForm">
            <form>
              <label>
                <span style={{ color: "red" }}>*</span> To
              </label>
              <input type="text" />
              <label>
                <span style={{ color: "red" }}>*</span> Recepient's Email
              </label>
              <input type="email" />
              <label>
                <span style={{ color: "red" }}>*</span> Recepient's Mobile
              </label>
              <input type="number" />
              <label>
                <span style={{ color: "red" }}>*</span> Message
              </label>
              <textarea style={{ height: "100px" }} cols="30" rows="10" />
            </form>
          </div>
          {/* <div className="paymentForm" style={{ marginTop: "1rem" }}>
            <form>
              <label>Message</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                style={{ height: "100px" }}
              ></textarea>
            </form>
          </div> */}
        </div>
        {singleProductDetail.map((product) => (
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
              {/* <div className="paymentReviewBtns">
                <button style={{ backgroundColor: "#40b566" }}>
                  PROCEED ORDER
                </button>
                <button style={{ backgroundColor: "#ea4335" }}>
                  CANCEL ORDER
                </button>
              </div> */}
            </div>
            <div className="paymentReviewBtns">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <h3>Send Gift</h3>
                <h3>Today at 12:12:12 pm</h3>
              </div>
              <Link to="/" className="link">
                <Button
                  style={{
                    width: "100%",
                    marginBottom: "25px",
                    padding: "10px",
                  }}
                >
                  Continue to confirm purchase
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Gift;
{
  /* <div className="paymentReviewBtns">
<div style={{ display: "flex", justifyContent: "space-between" }}>
  <h3>Send Gift</h3>
  <h3>Today at 12:12:12 pm</h3>
</div>
<Link to="/" className="link">
  <button
    style={{
      backgroundColor: "#40b566",
      width: "100%",
      marginBottom: "25px",
    }}
  >
    Continue to confirm purchase
  </button>
</Link>
</div>
</div> */
}
