import React from "react";
import Button from "../../components/Button/Button";

const Purchase = () => {
  return (
    <div className="purchase-container">
      <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#4a5f80" }}>
        My Order History
      </h1>
      <p style={{ marginTop: "-0.5rem" }}>3 Orders</p>
      <div className="orders-container">
        <div className="order">
          <div className="order-container">
            <div className="image-and-description">
              <img
                src="https://blogs.windows.com/wp-content/uploads/2016/09/Dell-XPS-5.jpg"
                alt=""
              />
              <div>
                <h1>Dell Laptop</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quasi amet nostrum laborum deserunt tempore iure explicabo
                </p>
              </div>
            </div>
            <div className="below-content">
              <p>
                <span>Location</span> : Australia
              </p>
              <p>Pending</p>
            </div>
            <div className="below-content">
              <p>
                <span>Gifted To</span> : Ram
              </p>
              <p>7th june 2020</p>
            </div>
            <div className="below-content">
              <p>
                <span>Subtotal</span>
              </p>
              <p>$1400</p>
            </div>
          </div>
          <div className="button-container">
            <button className="button">View Order</button>
            <Button
              text="Get Invoice"
              style={{
                width: "70%",
                borderRadius: "5px",
              }}
            />
            <Button
              text="Edit Order"
              style={{
                width: "70%",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
        <div className="order">
          <div className="order-container">
            <div className="image-and-description">
              <img
                src="https://blogs.windows.com/wp-content/uploads/2016/09/Dell-XPS-5.jpg"
                alt=""
              />
              <div>
                <h1>Dell Laptop</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quasi amet nostrum laborum deserunt tempore iure explicabo
                </p>
              </div>
            </div>
            <div className="below-content">
              <p>
                <span>Location</span> : Australia
              </p>
              <p>Pending</p>
            </div>
            <div className="below-content">
              <p>
                <span>Gifted To</span> : Ram
              </p>
              <p>7th june 2020</p>
            </div>
            <div className="below-content">
              <p>
                <span>Subtotal</span>
              </p>
              <p>$1400</p>
            </div>
          </div>
          <div className="button-container">
            <button className="button">View Order</button>
            <Button
              text="Get Invoice"
              style={{
                width: "70%",
                borderRadius: "5px",
              }}
            />
            <Button
              text="Edit Order"
              style={{
                width: "70%",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
        <div className="order">
          <div className="order-container">
            <div className="image-and-description">
              <img
                src="https://blogs.windows.com/wp-content/uploads/2016/09/Dell-XPS-5.jpg"
                alt=""
              />
              <div>
                <h1>Dell Laptop</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quasi amet nostrum laborum deserunt tempore iure explicabo
                </p>
              </div>
            </div>
            <div className="below-content">
              <p>
                <span>Location</span> : Australia
              </p>
              <p>Pending</p>
            </div>
            <div className="below-content">
              <p>
                <span>Gifted To</span> : Ram
              </p>
              <p>7th june 2020</p>
            </div>
            <div className="below-content">
              <p>
                <span>Subtotal</span>
              </p>
              <p>$1400</p>
            </div>
          </div>
          <div className="button-container">
            <button className="button">View Order</button>
            <Button
              text="Get Invoice"
              style={{
                width: "70%",
                borderRadius: "5px",
              }}
            />
            <Button
              text="Edit Order"
              style={{
                width: "70%",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
