import React from "react";

import tripImg from "../../../assets/trip.jpg";
import style from "./child.module.scss";

const ChildDiv = () => {
  return (
    <div className={style.container}>
      <div className={style.imgSection}>
        <img src={tripImg} />
      </div>
      <div className={style.footer}>
        <span>Ongoing</span>
        <h4>Trip to</h4>
        <span>40%</span>
        <progress id="file" value="32" max="100" className={style.progressBar}>
          {" "}
          32%{" "}
        </progress>
      </div>
    </div>
  );
};

export default ChildDiv;
