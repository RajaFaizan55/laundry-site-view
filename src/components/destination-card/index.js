import React from "react";

import arrowImg from "../../assets/arrow.svg";
import style from "./destination.module.scss";

const DestinationCard = ({ img, title, price, duration }) => {
  return (
    <div className={style.container}>
      <img className={style.mainImg} src={img} />
      <div style={{ padding: "10px" }}>
        <div className={style.lowerDiv}>
          <span>{title}</span>
          <span>{price}</span>
        </div>
        <div className={style.arrowImg}>
          <img src={arrowImg} />
          <span>{`${duration} Days Trip`}</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
