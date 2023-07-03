import React from "react";

import ChildDiv from "./childDiv";

import tripImg from "../../assets/trip.jpg";
import leafImg from "../../assets/leaf.svg";
import mapImg from "../../assets/map.svg";
import sendImg from "../../assets/send.svg";
import buildingImg from "../../assets/building.svg";
import likeImg from "../../assets/like.svg";
import style from "./trip.module.scss";

const Trip = () => {
  return (
    <>
      <div className={style.container}>
        <img src={tripImg} className={style.mainImg} />
        <div className={style.childDiv}>
          <ChildDiv />
        </div>
        <h5>Trip To Greece</h5>
        <span className={style.tripToGree}>14 to 29</span>
        <span>by Robbin</span>
        <div className={style.imgSection}>
          <div className={style.circularDiv}>
            <img src={leafImg} />
          </div>
          <div className={style.circularDiv}>
            <img src={mapImg} />
          </div>
          <div className={style.circularDiv}>
            <img src={sendImg} />
          </div>
        </div>

        <div className={style.footerSection}>
          <div>
            <img src={buildingImg} />
            <span>24 People</span>
          </div>
          <img src={likeImg} />
        </div>
      </div>
    </>
  );
};

export default Trip;
