import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { BiHeart } from "react-icons/bi";
import "./Wishlist.css";
import { ImCross } from "react-icons/im";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

import Button from "../../components/Button/Button";
const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <div className="wishlist-container">
        <div className="top">
          <BiHeart className="icon" />
          <p>My Wishlists</p>
        </div>
        <div className="below">
          <div className="item">
            <div className="ones"></div>
            <div className="twos"></div>
            <div
              className="threes"
              style={{ fontWeight: "bold", fontSize: "16px", color: "#4A5F80" }}
            >
              Product Name
            </div>
            <div
              className="fours"
              style={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Unit price
            </div>
            <div
              className="fives"
              style={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Date Added
            </div>
            <div
              className="sixs"
              style={{ fontWeight: "bold", fontSize: "16px", color: "#4A5F80" }}
            >
              Stock Status
            </div>
            <div className="sevens"></div>
          </div>
          <div className="line"></div>
          <div className="item">
            <div className="ones">
              <ImCross className="icon" />
            </div>
            <div className="twos">
              <img
                className="img"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=980:*"
                alt=""
              />
            </div>
            <div className="threes">Traditional Pizza</div>
            <div className="fours">$200</div>
            <div className="fives">20 june 2020</div>
            <div className="sixs">
              {" "}
              <TiTick style={{ fontSize: "20px" }} /> In Stock
            </div>
            <div className="sevens">
              <Button text="Purchase">
                <BsCreditCard2BackFill />
              </Button>
            </div>
          </div>

          <div className="item">
            <div className="ones">
              <ImCross className="icon" />
            </div>
            <div className="twos">
              <img
                className="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1280px-Momo_nepal.jpg"
                alt=""
              />
            </div>
            <div className="threes">Traditional Pizza</div>
            <div className="fours">$200</div>
            <div className="fives">20 june 2020</div>
            <div className="sixs">
              {" "}
              <TiTick style={{ fontSize: "20px" }} /> In Stock
            </div>
            <div className="sevens">
              <Button text="Purchase">
                <BsCreditCard2BackFill />
              </Button>
            </div>
          </div>
          <div className="item">
            <div className="ones">
              <ImCross className="icon" />
            </div>
            <div className="twos">
              <img
                className="img"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=980:*"
                alt=""
              />
            </div>
            <div className="threes">Traditional Pizza</div>
            <div className="fours">$200</div>
            <div className="fives">20 june 2020</div>
            <div className="sixs">
              <TiTick style={{ fontSize: "20px" }} /> In Stock
            </div>
            <div className="sevens">
              <Button text="Purchase">
                <BsCreditCard2BackFill />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
