import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import "./Navbar.css";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Link, Navigate } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import Button from "../Button/Button";
import { RiLoginBoxFill } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { GiOctogonalEye } from "react-icons/gi";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCookies } from "react-cookie";
import { logout } from "../../actions/login";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const clientId =
  "252151804518-vp24lkthddeje73bjp71kqlls8nfirks.apps.googleusercontent.com";

const Navbar = ({ isLoggedIn, profile, logout }) => {
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const [slider, setSlider] = useState(false);
  const [checkLogout, setCheckLogout] = useState(localStorage.getItem("token"));
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const Navigate = useNavigate();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // const logoutHandler = () => {
  //   localStorage.removeItem("token");
  //   window.location.reload();
  // };

  // const [isLoggedIn, setIsLoggedIn] = useState(
  //   localStorage.getItem("googleId")
  // );

  const onSuccess = () => {
    console.log("Logout made successfully");
    localStorage.removeItem("googleId");
    window.location.reload();
  };
  const toggleSlider = () => setSlider(!slider);

  const logoutHandler = () => {
    removeCookie("token", { path: "/" });
    dispatch({
      type: "LOGOUT_USER",
    });
    Navigate("/");
  };
  return (
    <div className="nav">
      <div className="navUp">
        <div className="navLeft">
          <Link to="/" className="link">
            <img src="/images/logo.jpg" alt="Not Found" />
          </Link>
        </div>
        <div className="navRight">
          <MenuOutlined className="menuIcon" onClick={toggleSlider} />
          <div className={slider ? "navMenu active" : "navMenu"}>
            <CloseOutlined className="closeIcon" onClick={toggleSlider} />
            <div className="menuItems">
              <div className="menuBtns">
                {/* {isLoggedIn ? (
                  <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSuccess}
                    style={{ fontWeight: "800" }}
                  />
                ) : (
                  <div>
                    {checkLogout ? (
                      <Button text="Logout" />
                    ) : (
                      
                    )}
                  </div>
                )} */}
              </div>
              <div className="navItems">
                <h5>
                  Categories <DownOutlined className="downIcon" />
                </h5>
                <div className="dropDownMenu">
                  <div style={{ width: "400px", padding: "0 2rem" }}>
                    <div className="navItem">
                      <h5 className="dropDownMenuLi">
                        <span> Holiday & Travel</span>
                      </h5>
                      <div className="dropDownSubMenu">
                        <ul>
                          <li className="dropDownMenuLi">
                            <span>In Australia</span>
                          </li>
                          <li className="dropDownMenuLi">World Tour</li>
                          <li className="dropDownMenuLi">Holiday & Travel</li>
                        </ul>
                      </div>
                    </div>
                    <div className="navItem">
                      <h5 className="dropDownMenuLi">Things To Do</h5>
                      <div className="dropDownSubMenu">
                        <ul>
                          <li className="dropDownMenuLi">Things To Do</li>
                        </ul>
                      </div>
                    </div>
                    <div className="navItem">
                      <h5 className="dropDownMenuLi">Health & Fitness</h5>
                      <div className="dropDownSubMenu">
                        <ul>
                          <li className="dropDownMenuLi">Health & Fitness</li>
                        </ul>
                      </div>
                    </div>
                    <div className="navItem">
                      <h5 className="dropDownMenuLi">Restaurant & Food</h5>
                      <div className="dropDownSubMenu">
                        <ul>
                          <li className="dropDownMenuLi">Restaurant & Food</li>
                        </ul>
                      </div>
                    </div>
                    <div className="navItem">
                      <h5 className="dropDownMenuLi">Shopping</h5>
                      <div className="dropDownSubMenu">
                        <ul>
                          <li className="dropDownMenuLi">Shopping</li>
                        </ul>
                      </div>
                    </div>
                    <div className="navItem">
                      <h5 className="dropDownMenuLi">Service</h5>
                      <div className="dropDownSubMenu">
                        <ul>
                          <li className="dropDownMenuLi">Service</li>
                        </ul>
                      </div>
                    </div>
                    <div className="navItem">
                      <h5 className="dropDownMenuLi">Medical Supply</h5>
                      <div className="dropDownSubMenu">
                        <ul>
                          <li className="dropDownMenuLi">Medical Supply</li>
                        </ul>
                      </div>
                    </div>
                    <div className="navItem">
                      <h5 className="dropDownMenuLi">Beauty</h5>
                      <div className="dropDownSubMenu">
                        <ul>
                          <li className="dropDownMenuLi">Beauty</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menuBtns">
            {isLoggedIn ? (
              <>
                {" "}
                <p>Help</p>
                <Link to={"/your-wishlist"}>
                  <AiTwotoneHeart
                    className="icon"
                    style={{ alignSelf: "center" }}
                  ></AiTwotoneHeart>
                </Link>
                <IoIosNotifications
                  className="icon"
                  onClick={() => {
                    setIsNotificationOpen(!isNotificationOpen);
                    setIsDropDownOpen(false);
                  }}
                />
                <div className="image-and-name">
                  <div
                    className="inner"
                    onClick={() => {
                      setIsDropDownOpen(!isDropDownOpen);
                      setIsNotificationOpen(false);
                    }}
                  >
                    <img
                      src={
                        profile.company_logo
                          ? profile.company_logo
                          : "http://simpleicon.com/wp-content/uploads/user1.png"
                      }
                      alt=""
                    />
                    <p>{profile.fullName}</p>
                    <AiOutlineCaretDown className="iconss" />
                  </div>
                </div>
                {isNotificationOpen && (
                  <div className="dropdown active notification">
                    <div className="content">
                      <div className="line"></div>
                      <img
                        src="https://blog.sourcefabric.org/images/cms-image-000004039.jpg"
                        alt=""
                      />
                      <div>
                        <span className="title">
                          Dear Mark, Your order has successfully been placed.
                        </span>
                        <div className="item">
                          <span>Order No:</span>
                          <span>242539577</span>
                        </div>
                        <div className="item">
                          <span>Product:</span>
                          <span>Traditional Pizza</span>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <div className="line"></div>
                      <img
                        src="https://blog.sourcefabric.org/images/cms-image-000004039.jpg"
                        alt=""
                      />
                      <div>
                        <span className="title">
                          Dear Mark, Your order has successfully been placed.
                        </span>
                        <div className="item">
                          <span>Order No:</span>
                          <span>242539577</span>
                        </div>
                        <div className="item">
                          <span>Product:</span>
                          <span>Traditional Pizza</span>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <div className="line"></div>
                      <img
                        src="https://blog.sourcefabric.org/images/cms-image-000004039.jpg"
                        alt=""
                      />
                      <div>
                        <span className="title">
                          Dear Mark, Your order has successfully been placed.
                        </span>
                        <div className="item">
                          <span>Order No:</span>
                          <span>242539577</span>
                        </div>
                        <div className="item">
                          <span>Product:</span>
                          <span>Traditional Pizza</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div
                  className={isDropDownOpen ? "dropdown active" : "dropdown"}
                >
                  <Link to={"/your-wishlist"}>
                    <div className="content">
                      <AiTwotoneHeart className="icon" />
                      <span>My Wishlist</span>
                    </div>
                  </Link>

                  <div className="line"></div>
                  <Link to={"/your-profile"}>
                    <div className="content">
                      <FaUserAlt className="icon" />
                      <span>Profile</span>
                    </div>
                  </Link>
                  <div className="line"></div>
                  <div className="content">
                    <GiOctogonalEye className="icon" />
                    <span>Recent Saves</span>
                  </div>
                  <div className="line"></div>
                  <div className="content" onClick={logoutHandler}>
                    <IoIosLogOut className="icon" />
                    <span>Logout</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button text="Login">
                    <RiLoginBoxFill />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button text="Signup">
                    <AiOutlineUserAdd />
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="navDown">
        <div className="navItems">
          <h5>Holiday & Travel</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">In Australia</li>
              <li className="dropDownMenuLi">World Tour</li>
              <li className="dropDownMenuLi">Holiday & Travel</li>
            </ul>
          </div>
        </div>
        <div className="navItems">
          <h5>Things To Do</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">Things To Do</li>
            </ul>
          </div>
        </div>
        <div className="navItems">
          <h5>Health & Fitness</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">Health & Fitness</li>
            </ul>
          </div>
        </div>
        <div className="navItems">
          <h5>Restaurant & Food</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">Mix Pizza</li>
              <li className="dropDownMenuLi">Mo Mo</li>
              <li className="dropDownMenuLi">Restaurant & Food</li>
            </ul>
          </div>
        </div>
        <div className="navItems">
          <h5>Shopping</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">Shopping</li>
            </ul>
          </div>
        </div>
        <div className="navItems">
          <h5>Service</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">IT Computer</li>
              <li className="dropDownMenuLi">Health</li>
              <li className="dropDownMenuLi">Services</li>
            </ul>
          </div>
        </div>
        <div className="navItems">
          <h5>Medical Supply</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">Medical Supply</li>
            </ul>
          </div>
        </div>
        <div className="navItems">
          <h5>
            Categories <DownOutlined className="downIcon" />
          </h5>
          <div className="dropDownMenu">
            <div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Holiday & Travel</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">In Australia</li>
                    <li className="dropDownMenuLi">World Tour</li>
                    <li className="dropDownMenuLi">Holiday & Travel</li>
                  </ul>
                </div>
              </div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Things To Do</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">Things To Do</li>
                  </ul>
                </div>
              </div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Health & Fitness</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">Health & Fitness</li>
                  </ul>
                </div>
              </div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Restaurant & Food</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">Restaurant & Food</li>
                  </ul>
                </div>
              </div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Shopping</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">Shopping</li>
                  </ul>
                </div>
              </div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Service</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">Service</li>
                  </ul>
                </div>
              </div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Medical Supply</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">Medical Supply</li>
                  </ul>
                </div>
              </div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Beauty</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">Beauty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navItems">
          <h5>Beauty</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">Beauty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    profile: state.login.profile,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
