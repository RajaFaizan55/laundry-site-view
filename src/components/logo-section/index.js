import React from "react";

import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import style from "./logo.module.scss";

const LogoSection = () => {
  return (
    <div className={style.container}>
      <img src={logo1} />
      <img src={logo2} />
      <img src={logo3} />
      <img src={logo4} />
      <img src={logo5} />
    </div>
  );
};

export default LogoSection;
