import React from "react";
import Lottie from "react-lottie";

import animationData from "../../assets/animation.json";

import style from "./splash.module.scss";

const SpalshScreen = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={style.wraper}>
      <Lottie options={options} height={400} width={400} />
    </div>
  );
};

export default SpalshScreen;
