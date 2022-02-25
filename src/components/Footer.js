import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="one">
        <img
          src="https://classideals.ausnep.com/static/media/classiclogo.c441bfa8.png"
          alt=""
        />
        <p>COPYRIGHT 2021 classideals</p>
        <p>ALL RIGHT RESERVED</p>
      </div>
      <div className="two">
        <h1>About</h1>
        <div className="innerContainer">
          <a href="">About us</a>
          <a href="">contact</a>
          <a href="">Listing</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms of condition</a>
          <a href="">cookie policy</a>
        </div>
      </div>
      <div className="three">
        <h1>ShopGuide</h1>
        <div className="innerContainer">
          <a href="">Holiday and Travel</a>
          <a href="">Things to do</a>
          <a href="">Health and beauty</a>
          <a href="">Restuarant and food</a>
          <a href="">Shopping</a>
          <a href="">Services</a>
          <a href="">Beauty</a>
          <a href="">Training</a>
        </div>
      </div>
      <div className="four">
        <h1>NewsLetter</h1>
        <div className="innerContainer1">
          <p>Subscribe our News Letter</p>
          <div className="input">
            <input type="text" placeholder="Enter you Email" />
            <button type="submit">Submit</button>
          </div>
          <div></div>
          <p>Download the classideals app</p>
          <div className="logo-container">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDA5MWVhIiBkPSJNMTQuMSw0MmgxOS44YzQuNDc0LDAsOC4xLTMuNjI3LDguMS04LjFWMjdINnY2LjlDNiwzOC4zNzMsOS42MjYsNDIsMTQuMSw0MnoiPjwvcGF0aD48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMTEiIHg9IjYiIHk9IjE2IiBmaWxsPSIjMDBiMGZmIj48L3JlY3Q+PHBhdGggZmlsbD0iIzQwYzRmZiIgZD0iTTMzLjksNkgxNC4xQzkuNjI2LDYsNiw5LjYyNiw2LDE0LjFWMTZoMzZ2LTEuOUM0Miw5LjYyNiwzOC4zNzQsNiwzMy45LDZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIyLjg1NCwxOC45NDNsMS43MzgtMi45NjdsLTEuNTk4LTIuNzI3Yy0wLjQxOC0wLjcxNS0xLjMzNy0wLjk1NC0yLjA1Mi0wLjUzNgljLTAuNzE1LDAuNDE4LTAuOTU1LDEuMzM3LTAuNTM2LDIuMDUyTDIyLjg1NCwxOC45NDN6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI2Ljc4NiwxMi43MTRjLTAuNzE2LTAuNDE5LTEuNjM1LTAuMTc5LTIuMDUyLDAuNTM2TDE2LjA5LDI4aDMuNDc3bDcuNzU0LTEzLjIzMwlDMjcuNzQsMTQuMDUyLDI3LjUsMTMuMTMzLDI2Ljc4NiwxMi43MTR6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTM0LjUyMSwzMi45MmwtNy42MTEtMTIuOTg3bC0wLjc2MywxLjMwM2MtMC40NDQsMC45NS0wLjUwNCwyLjAyNC0wLjE4NSwzLjAxMWw1Ljk3MiwxMC4xOTEJYzAuMjc5LDAuNDc2LDAuNzgsMC43NDEsMS4yOTUsMC43NDFjMC4yNTcsMCwwLjUxOS0wLjA2NiwwLjc1Ny0wLjIwNkMzNC43MDEsMzQuNTU0LDM0Ljk0LDMzLjYzNSwzNC41MjEsMzIuOTJ6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI1LjQ3MywyNy45MTlsLTAuMTcxLTAuMjg5Yy0wLjE0OC0wLjIyNC0wLjMxMi0wLjQzNC0wLjQ5OC0wLjYyMUgxMi4zCWMtMC44MjksMC0xLjUsMC42NjUtMS41LDEuNDg0czAuNjcxLDEuNDg0LDEuNSwxLjQ4NGgxMy4zOTRDMjUuODg4LDI5LjMyNCwyNS44MzUsMjguNTk1LDI1LjQ3MywyNy45MTl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjY2LDMyLjk2MWMtMC40ODctMC41NTYtMS4xOS0wLjkzNC0yLjAzLTAuOTU5bC0wLjAwNCwwYy0wLjMxNy0wLjAwOS0wLjYyOCwwLjAyNi0wLjkzMiwwLjA4NwlsLTAuNDg3LDAuODMxYy0wLjQxOSwwLjcxNS0wLjE3OSwxLjYzNCwwLjUzNiwyLjA1M2MwLjIzOCwwLjE0LDAuNSwwLjIwNiwwLjc1NywwLjIwNmMwLjUxNSwwLDEuMDE3LTAuMjY2LDEuMjk1LTAuNzQxCUwxNi42NiwzMi45NjF6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMwLjE5NiwyNy4wMDlIMzUuN2MwLjgyOSwwLDEuNSwwLjY2NSwxLjUsMS40ODRzLTAuNjcxLDEuNDg0LTEuNSwxLjQ4NGgtNS4zOTQJQzMwLjExMiwyOS4zMjQsMzAuMDEsMjcuMTk2LDMwLjE5NiwyNy4wMDl6Ij48L3BhdGg+PC9zdmc+"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
