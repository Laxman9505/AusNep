import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Rate } from "antd";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ReactStars from "react-rating-stars-component";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-material-ui-carousel";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Button from "../../components/Button/Button";

import {
  TagsOutlined,
  HomeOutlined,
  PlusOutlined,
  MinusOutlined,
  HeartOutlined,
  TagOutlined,
} from "@ant-design/icons";
import axios from "axios";
import "antd/dist/antd.css";
import { Link, useParams } from "react-router-dom";
import { RiArrowDownCircleFill, RiMessage2Fill } from "react-icons/ri";

const ProductDetails = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [productDetails, setProductDetails] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [productPrice, setProductIPrice] = useState([]);
  const [counter, setCounter] = useState(1);
  const { productId } = useParams();
  const [rating, setRating] = useState(0);

  const incCounter = () => {
    setCounter(counter + 1);
  };

  const decCounter = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await axios
        .get(`https://classibazaar.com.au/api/deal/detail/${productId}`)
        .catch((err) => {
          console.log(err);
        });
      console.log(response.data.deal);
      setProductDetails(response.data.deal);
      setProductImage(response.data.images);
      setProductIPrice(response.data.products);
    };
    getProductDetails();
  }, [productId]);

  return (
    <>
      <Navbar />
      <div className="productDetails" key={productDetails.id}>
        <div className="productDesc">
          <div className="productUp">
            <h2>{productDetails.dealstitle}</h2>

            <p>
              <ReactStars
                count={3}
                color={"#ffd700"}
                isHalf={true}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
            </p>
          </div>
          <div className="productDown">
            <p>
              <TagsOutlined className="icon" /> {productDetails.subtitle}
            </p>
            <p>
              <HomeOutlined className="icon" /> Shop 112 Joplin Lane Opposite to
              Club lime Pool, Kambri ANU, ACTON, 2601
            </p>
          </div>
        </div>
        <div className="productDetailInfo">
          <div className="productLeft">
            {/* <Carousel
              autoplay="true"
              interval={3000}
              animation="slide"
              indicators={true}
              // navButtonsAlwaysVisible={true}
            >
              {productImage.map((image, key) => (
                <div className="productImg">
                  <img src={image.thumbnail} alt="" key={key} />
                </div>
              ))}
            </Carousel> */}
            <AutoplaySlider
              animation="cubeAnimation"
              infinite={true}
              play={true}
              interval={2000}
            >
              {/* <div data-src="/path/to/image-0.png" />
              <div data-src="/path/to/image-1.png" />
              <div data-src="/path/to/image-2.jpg" /> */}
              {productImage.map((image, key) => (
                <div className="productImg">
                  <img src={image.thumbnail} alt="" key={key} />
                </div>
              ))}
            </AutoplaySlider>

            <div className="productHightlight highlight">
              <h3>Highlights</h3>
              <li
                style={{ fontSize: "16px" }}
                dangerouslySetInnerHTML={{ __html: productDetails.highlights }}
              ></li>
            </div>
            <div className="productHightlight">
              <h3>Recent Reviews</h3>
              <div className="reviewContainer">
                <div className="review">
                  <div className="top">
                    <div className="left">
                      <div className="profile">A</div>
                      <div className="name">
                        <p className="na">Vance Joy</p>
                        <p className="date">28 Aug 2017</p>
                      </div>
                    </div>
                    <div className="right">
                      <ReactStars
                        count={3}
                        color={"#ffd700"}
                        isHalf={true}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p>
                        {" "}
                        <RiMessage2Fill className="icon" />5 Ratings
                      </p>
                    </div>
                  </div>
                  <div className="bottomText">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Odit fuga quisquam soluta sint, aliquam ex natus a in
                      numquam culpa hic. Libero aliquam voluptates voluptatem.
                    </p>
                  </div>
                </div>
                <div className="review">
                  <div className="top">
                    <div className="left">
                      <div className="profile">A</div>
                      <div className="name">
                        <p className="na">Vance Joy</p>
                        <p className="date">28 Aug 2017</p>
                      </div>
                    </div>
                    <div className="right">
                      <ReactStars
                        count={3}
                        color={"#ffd700"}
                        isHalf={true}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p>
                        {" "}
                        <RiMessage2Fill className="icon" />5 Ratings
                      </p>
                    </div>
                  </div>
                  <div className="bottomText">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Odit fuga quisquam soluta sint, aliquam ex natus a in
                      numquam culpa hic. Libero aliquam voluptates voluptatem.
                    </p>
                  </div>
                </div>
                <div className="review">
                  <div className="top">
                    <div className="left">
                      <div className="profile">A</div>
                      <div className="name">
                        <p className="na">Vance Joy</p>
                        <p className="date">28 Aug 2017</p>
                      </div>
                    </div>
                    <div className="right">
                      <ReactStars
                        count={3}
                        color={"#ffd700"}
                        isHalf={true}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p>
                        {" "}
                        <RiMessage2Fill className="icon" />5 Ratings
                      </p>
                    </div>
                  </div>
                  <div className="bottomText">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Odit fuga quisquam soluta sint, aliquam ex natus a in
                      numquam culpa hic. Libero aliquam voluptates voluptatem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Button
              text="More Reviews"
              style={{ width: "20%", marginTop: "1rem", alignSelf: "center" }}
            >
              <RiArrowDownCircleFill />
            </Button>

            <div className="productHightlight">
              <h3>About This Deal</h3>
              <li
                dangerouslySetInnerHTML={{ __html: productDetails.description }}
              ></li>
            </div>
            <div className="productHightlight">
              <h3>Aditional Information</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                blandit pellentesque amet sed dui. Tristique quis magna
                vestibulum, consectetur enim ultrices. At eu eget et id. Id eu
                mi diam faucibus rhoncus tincidunt. Ut lectus urna viverra
                tristique massa fermentum netus rutrum. Tellus adipiscing sit
                amet, ac, imperdiet pellentesque faucibus elit. Posuere in
                imperdiet egestas leo. Libero, venenatis consequat risus
                ultrices consequat porta tincidunt. Vestibulum neque sit nisl
                faucibus sit magnis placerat platea aliquam.
              </p>
            </div>
            <div className="productHightlight">
              <h3>Fine Print</h3>
              <li
                dangerouslySetInnerHTML={{ __html: productDetails.find_print }}
              ></li>
            </div>
            <div className="productHightlight hawa-p">
              <h3>How To Redeem</h3>
              <li
                dangerouslySetInnerHTML={{
                  __html: productDetails.how_to_redeem,
                }}
              ></li>
            </div>
            <div className="productHightlight">
              <h3>About The Company</h3>
              <p>
                About the company Firescreen television is the online news
                portal site, where you can see the latest news and your favorite
                news. It helps to make the world more digital. FSTV plays a
                vital role in educating and informing Mass with the latest
                updates, current happenings around the globe. People don’t have
                much more time to read the Printed newspaper with yesterday’s
                happening, so they always follow web portals or Electronic Media
                for getting the latest News. User can access their mobile,
                social sites, Whatsapp, Facebook, and keep themself updated very
                fast with less time-consuming methods. Hence FSTV provides the
                fastest news Updates. Vvv Okay lets check this issues.......
              </p>
            </div>
          </div>
          <div className="productRight">
            <div
              className="productRightContainer"
              style={{ backgroundColor: "#F2F5FF" }}
            >
              <div className="productRightUp">
                <h1>USE CODE</h1>
                <h2 style={{ color: "#dc8b2e" }}>UWBF20</h2>
                <h2>
                  Get <span style={{ color: "#0dd078" }}>0% discount</span>
                </h2>
                <h3 style={{ color: "#dc8b2e" }}>Use it or lose it</h3>
                <h3 style={{ color: "#ff0000" }}>Ends 12:45:00</h3>
              </div>
              <div className="productRightDown">
                <div className="productDownButtons">
                  Quality:
                  <div className="rectangle">
                    <PlusOutlined onClick={incCounter} />
                  </div>
                  <div className="rectangle value">{counter}</div>
                  <div className="rectangle">
                    <MinusOutlined onClick={decCounter} />
                  </div>
                </div>
                <div className="addToBtns">
                  <Button style={{ color: "#fff" }}>
                    <HeartOutlined /> Add To Wishlist
                  </Button>
                  <button style={{ backgroundColor: "#dc8b2e", color: "#fff" }}>
                    <TagOutlined /> {counter} + Brought
                  </button>
                </div>
                {productPrice.map((product) => (
                  <div className="productPriceDescount" key={product.id}>
                    <p className="discount">{product.discount}% off</p>

                    <div>
                      <p>
                        <del>${product.product_price}</del>
                      </p>
                      <p>${product.price_after_discount}</p>
                    </div>
                  </div>
                ))}
                {/* <div className="productDetailsRadio">
                  <input type="radio" />
                  <label>LG TV</label>
                </div> */}
                <div className="limitedTime">
                  <p>Limited time remaining</p>
                  <h2>12:12:12</h2>
                </div>
              </div>
              <div className="productDetailsCheckoutBtn">
                <Link className="link" to={`/payment/${productDetails.id}`}>
                  <Button style={{ color: "#fff" }}>
                    Continue To CheckOut
                  </Button>
                </Link>

                <Link to={`/gift/${productDetails.id}`} className="link">
                  <button style={{ backgroundColor: "#dc8b2e", color: "#fff" }}>
                    Give as a Gift
                  </button>
                </Link>
              </div>
            </div>
            <p style={{ marginTop: "25px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.1522162302053!2d149.11846281512146!3d-35.277341550957004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164d448f9b3033%3A0xa086b01912baf60a!2s112%20Joplin%20Ln!5e0!3m2!1sen!2snp!4v1641706509775!5m2!1sen!2snp"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="map"
              ></iframe>
            </p>
            <div className="shareDeals">
              <h2>Share This Deals</h2>
              <div className="dealsIcon">
                <img src="/images/facebook.png" alt="" />
                <img src="/images/twitter.png" alt="" />
                <img src="/images/pininterest.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
