import React from "react";

import instaImg from "../../assets/insta.png";
import twiterImg from "../../assets/twiter.png";
import fbImg from "../../assets/fb.png";
import playstoreImg from "../../assets/playstore.png";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <div style={{ marginTop: "130px " }}>
      <div className={style.container}>
        <div className={style.logoSection}>
          <h1>KAJI.</h1>
          <span>
            Book your trip in minute, get full control for much longer
          </span>
        </div>
        <div className={style.infoSection}>
          <h3>company</h3>
          <span>About</span>
          <span>Careers</span>
          <span>Mobile</span>
        </div>
        <div className={style.infoSection}>
          <h3>contact</h3>
          <span>Help/FAQ</span>
          <span>Press</span>
          <span>Affilates</span>
        </div>
        <div className={style.infoSection}>
          <h3>more</h3>
          <span>Airlinesfees</span>
          <span>Airline</span>
          <span>Low fare tipe</span>
        </div>
        <div>
          <div className={style.imgSection}>
            <img className={style.socialImg} src={fbImg} />
            <img className={style.socialImg} src={instaImg} />
            <img className={style.socialImg} src={twiterImg} />
            <p>Discover our app</p>
            <div style={{ display: "flex" }}>
              <div className={style.playstoree}>
                <img src={playstoreImg} />
                <span>GET IT GOOGLE PLAY</span>
              </div>
              <div className={style.playstoree}>
                <img src={playstoreImg} />
                <span>GET IT GOOGLE PLAY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.rightsReserved}>
        <span>All rights reserved@jadoo.co</span>
      </div>
    </div>
  );
};

export default Footer;
