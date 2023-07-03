import React, { useEffect, useState } from "react";
import AOS from "aos";

import BackgroundImage from "../../assets/bg.jpeg";
import logo from "../../assets/logo.svg";
import bgImgSmall from "../../assets/Decore.svg";
import planImg from "../../assets/plane.svg";
import girlImg from "../../assets/girlImg1.png";
import arrowImg from "../../assets/playbtn.png";
import menuImg from "../../assets/menu.png";
import style from "./navbar.module.scss";
import "aos/dist/aos.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const menuClick = () => {
    setToggle(false);
  };

  console.log("toggle : ", toggle);

  return (
    <div
      data-aos="fade-down"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
      className={style.backgroundDiv}
    >
      {/* Nav bar */}

      <div className={style.wraperMenu}>
        <img style={{ marginTop: "5px" }} src={logo} alt="site logo" />
        <div className={style.menu}>
          <p className={style.webPTag}> Destinations</p>
          <p className={style.webPTag}>Hotels</p>
          <p className={style.webPTag}>Flights</p>
          <p className={style.webPTag}>Bookings</p>
          <p className={style.webPTag}>Login</p>
          <p className={`${style.buttonType} ${style.webPTag}  `}>Sign up</p>
          <p className={style.webPTag}>
            <select className={style.selectStyle}>
              <option>EN</option>
              <option>FR</option>
            </select>
          </p>
          <div className={style.mobileMenu}>
            <img width={30} src={menuImg} onClick={() => setToggle(!toggle)} />
            {toggle && (
              <div className={style.menuScreenOnMobile}>
                <p onClick={menuClick}>Destinations</p>
                <p onClick={menuClick}>Hotels</p>
                <p onClick={menuClick}>Flights</p>
                <p onClick={menuClick}>Bookings</p>
                <p onClick={menuClick}>Login</p>
                <p onClick={menuClick}>Sign up</p>
                <p>
                  <select onChange={menuClick} className={style.selectStyle}>
                    <option>EN</option>
                    <option>FR</option>
                  </select>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*  image section  */}

      <div className={style.imgSectionCountainer}>
        <div style={{ paddingRight: "40px" }}>
          <h3 style={{ color: "indianred" }}>
            BEST DESTINATIONS AROUND THE WORLD
          </h3>

          <div style={{ display: "flex" }}>
            <h1>Travel, </h1>
            <h1
              className={style.bgImgSmall}
              style={{ backgroundImage: `url(${bgImgSmall})` }}
            >
              enjoy
            </h1>
          </div>
          <h1>and live a new</h1>
          <p style={{ marginTop: "70px" }}>
            Lorem ipsum adipisicing id excepteur nisi in enim dolore labore
            tempor non et enim consectetur.Qui eiusmod aliqua in sint est ipsum
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button>Find out more</button>
            <div className={style.playBtn}>
              <img src={arrowImg} width={25} />
            </div>
            <span>PLay Demo</span>
          </div>
        </div>
        <div
          style={{ position: "relative" }}
          className={style.imgSectionContainer}
        >
          <img src={planImg} className={style.backPlane} />
          <img src={planImg} className={style.frontPlane} />
          <img className={style.imageGirl} src={girlImg} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
