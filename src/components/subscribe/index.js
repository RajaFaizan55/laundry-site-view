import React from "react";

import playBtn from "../../assets/whitesend.png";
import emialImg from "../../assets/email.png";
import style from "./sub.module.scss";

const Subscribe = () => {
  return (
    <div className={style.container}>
      <div className={style.childDiv}>
        <img src={playBtn} />
      </div>
      <h1>
        Subscribe to get information, latest news and other interesting offers
        about Cobham
      </h1>
      <div className={style.inputSecion}>
        <div className={style.inputDiv}>
          <img src={emialImg} />
          <input placeholder="your email" />
        </div>
        <button> Subscribe </button>
      </div>
    </div>
  );
};

export default Subscribe;
