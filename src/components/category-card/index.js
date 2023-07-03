import React from "react";

import planeImg from "../../assets/plane.svg";
import style from "./category.module.scss";

const CategoryCard = ({ img, title, desc }) => {
  return (
    <div className={style.container}>
      <img src={img} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default CategoryCard;
