import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import "./Search.css";
import OutsideAlerter from "../UseOutSideAlterter";
import Button from "../Button/Button";
import { GoSearch } from "react-icons/go";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { IoMdArrowDropdown } from "react-icons/io";

const Search = () => {
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [cities, setCities] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [openPriceModal, setOpenPriceModal] = useState(false);
  const [openDistanceModal, setOpenDistanceModa] = useState(false);
  const [price, setPrice] = useState(0);
  const [distance, setDistance] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://classibazaar.com.au/api/deal/products"
      );
      setCities(response.data.cities);
      setSearchProduct(response.data.products);
    };
    getData();
  }, []);

  return (
    <div className="search">
      <div className="searchBtns">
        <div className="searchContainer">
          {/* <div className="inputContainer" onClick={() => setShow(!show)}> */}
          <GoSearch className="location-icon" />
          {/* <p>Choose the location</p>
            <AiOutlineArrowDown
              className="arrow-icon"
              onClick={() => setShow(!show)}
            /> */}

          {show ? (
            <OutsideAlerter
              setShow={setShow}
              show={show}
              wrapperRef={wrapperRef}
            >
              <div className="dropDownMenuLocation" ref={wrapperRef}>
                {cities.map((city, key) => {
                  return (
                    <ul key={key}>
                      <li className="li">{city.cityName}</li>
                    </ul>
                  );
                })}
              </div>
            </OutsideAlerter>
          ) : null}

          <input
            placeholder="Search Breakfast, Lunch, Medical, Beauty products"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            className="searchBtn"
            text="Search"
            style={{
              borderRadius: "5px",
              height: "85%",
              // width: "90px",
              marginRight: "5px",
            }}
            onClick={() => setOpenModal(!openModal)}
          ></Button>
          {openModal && (
            <div className="modal">
              <div className="overlay"></div>
              <div className="modalContent">
                {searchProduct
                  .filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (
                      val.dealstitle
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return true;
                    }
                    return false;
                  })
                  .map((product, key) => {
                    return (
                      <div key={key} className="showSearch">
                        {product.dealstitle}
                      </div>
                    );
                  })}
                <button
                  className="closeModal"
                  onClick={() => setOpenModal(!openModal)}
                >
                  X
                </button>
              </div>
            </div>
          )}
          {openPriceModal && (
            <div className="modal">
              <div className="overlay"></div>
              <div
                className="modalContent"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="top-container"
                  style={{
                    width: "100%",
                    // backgroundColor: "#F2F5FF",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span style={{ fontWeight: "bold", marginLeft: "-10px" }}>
                    Price Filter
                  </span>
                  <Button
                    className="closeModal"
                    onClick={() => setOpenPriceModal(false)}
                  >
                    X
                  </Button>
                </div>
                <Slider
                  ariaLabelForHandle={"$faf"}
                  value={price}
                  onChange={(e) => setPrice(e)}
                />
                <div
                  style={{
                    alignSelf: "center",
                    marginTop: "5px",
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  <span>${price * 10}</span>
                  <span>-</span>
                  <span>$1000</span>
                </div>
                <Button text="Filter" style={{ marginTop: "8px" }} />
              </div>
            </div>
          )}
          {openDistanceModal && (
            <div className="modal">
              <div className="overlay"></div>
              <div
                className="modalContent"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="top-container"
                  style={{
                    width: "100%",
                    // backgroundColor: "#F2F5FF",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span style={{ fontWeight: "bold", marginLeft: "-10px" }}>
                    Distance Filter
                  </span>
                  <Button
                    className="closeModal"
                    onClick={() => setOpenDistanceModa(false)}
                  >
                    X
                  </Button>
                </div>
                <Slider
                  defaultValue={20}
                  ariaLabelForHandle={"$faf"}
                  value={distance}
                  onChange={(e) => setDistance(e)}
                />
                <div
                  style={{
                    alignSelf: "center",
                    marginTop: "5px",
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  <span>{distance} km</span>
                </div>
                <Button text="Filter" style={{ marginTop: "8px" }} />
              </div>{" "}
            </div>
          )}
        </div>
        <div className="searchContainer below">
          <div className="inner-container">
            <div className="left-container">
              <div onClick={() => setShow(!show)}>
                <span>Location</span>
                <IoMdArrowDropdown className="icon" />
              </div>
              <div onClick={() => setOpenPriceModal(true)}>
                <span>Price</span>
                <IoMdArrowDropdown className="icon" />
              </div>
              <div onClick={() => setOpenDistanceModa(true)}>
                <span>Distance</span>
                <IoMdArrowDropdown className="icon" />
              </div>
            </div>
            <div className="right-button">Clear All</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
