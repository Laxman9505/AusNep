import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ReactStars from "react-rating-stars-component";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularProducts = () => {
  const [PopularProducts, setPopularProducts] = useState([]);
  const [visible, setVisible] = useState(4);
  const [buttonToggle, setButtonToggle] = useState(false);

  const showMoreItems = () => {
    setButtonToggle(!buttonToggle);
    setVisible((prevValue) => prevValue + 4);
  };

  const showLessItems = () => {
    setButtonToggle(!buttonToggle);
    setVisible((prevValue) => prevValue - 4);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    const getFeaturedProducts = async () => {
      const response = await axios
        .get("https://classibazaar.com.au/api/deal/popular_deals")
        .catch((err) => {
          console.log(err);
        });
      setPopularProducts(response.data);
    };
    getFeaturedProducts();
  }, []);

  return (
    <>
      <h2 className="featuredTitle">Popular Products</h2>
      <div className="span" />
      <div className="featuredProducts">
        {PopularProducts.slice(0, visible).map((product) => (
          <div className="productCard" key={product.id} data-aos="fade-up">
            <Link to={`/details/${product.deal_slug}`} className="link">
              <div className="image-container">
                <div className="overlays"></div>

                <img src={product.image.thumbnail} alt="" />
                <div className="below-container">
                  <div className="inner-div">
                    <p className="title">{product.dealstitle}</p>
                    <p className="discount">{product.discount}% Off</p>
                  </div>
                  <div className="inner-div">
                    <div
                      style={{
                        display: "flex",
                        gap: "0.3rem",
                      }}
                    >
                      {" "}
                      <del>{product.product_price}$</del>
                      <p
                        style={{
                          color: "red",
                          fontSize: "18px",
                          fontWeight: "bolder",
                          marginTop: "-4.5px",
                        }}
                      >
                        {product.actual_price}$
                      </p>
                    </div>
                    <div style={{ marginTop: "-25px" }}>
                      <ReactStars
                        count={product.rating + 1}
                        color={"#ffd700"}
                        isHalf={true}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                  <p className="subtitle active">{product.subtitle}</p>
                </div>
              </div>

              {/* <div className="productCardBottom">
              <div className="productCardLeft">
                <p style={{ color: "#253343" }}>{product.dealstitle}</p>
                <p style={{ color: "#253343" }}>{product.discount}% OFF</p>
              </div>
              <div className="productCardRight">
                <p className="ellipsis" style={{ color: "black" }}>
                  {product.subtitle}
                </p>
                <div>
                  <p>
                    <del>${product.product_price}</del>
                  </p>
                  <p>${product.actual_price}</p>
                </div>
              </div>
            </div> */}
            </Link>
          </div>
        ))}
      </div>
      <div className="btns">
        {buttonToggle ? (
          <Button className="showMore" onClick={showLessItems}>
            See less
          </Button>
        ) : (
          <Button className="showMore" onClick={showMoreItems}>
            See more
          </Button>
        )}
      </div>
    </>
  );
};

export default PopularProducts;
