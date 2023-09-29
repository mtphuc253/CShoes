
import React from "react";
import "./CardComponent.css"; // Import CSS file
import { CardStyle } from "./style";

const CardComponent = () => {
  return (
    <div className=" col-lg-3 col-md-4 col-sm-6">
      <div className="card" >
        <CardStyle
          className="cardItem"
          style={{
            width: 239,
            height: "auto",
          }}
          bodyStyle={{ padding: "15px" }}
          cover={<img alt="product" src="./productImage/product1.webp" />}
        >
          <div className="nameProduct">
            NIKE AIR FORCE 1 - DONUT STYLE
          </div>

          <div className="priceProduct">3.5000.00đ</div>

          <div className="reportProduct">
            <span>4.9</span>
            <i
              className="fa-solid fa-star"
              style={{ color: "rgb(255, 226, 59)", fontSize: "10px" }}
            ></i>
          </div>
        </CardStyle>
      </div>
    </div>

  );
};

export default CardComponent;
