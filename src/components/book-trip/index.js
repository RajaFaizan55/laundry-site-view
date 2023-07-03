import React from "react";

import style from "./book.module.scss";
const BookTrip = ({ img, title, desc, bgColor }) => {
  return (
    <div className={style.container}>
      <div className={style.box} style={{ backgroundColor: bgColor }}>
        <img src={img} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default BookTrip;
