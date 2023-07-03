import React, { useRef } from "react";
import ElasticCarousel, { consts, carousel } from "react-elastic-carousel";

import { tripData } from "../../helper";

import arrowUp from "../../assets/arowup.png";
import style from "./carousal.module.scss";

const Carousal = () => {
  const carouselRef = useRef(null);
  const handlePrevClick = () => {
    carouselRef.current.slidePrev();
  };

  const handleNextClick = () => {
    carouselRef.current.slideNext();
  };
  return (
    <div className={style.carousalSection}>
      <div style={{ marginBottom: "65px" }}>
        <ElasticCarousel
          showArrows={false}
          itemPosition={consts.START}
          className="my-carousel"
          renderPagination={({ pages, activePage, onClick }) => {
            console.log({ activePage, pages });
            return (
              <div direction="row" className={style.paginationDotsPosition}>
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  return (
                    <div
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                    >
                      <div
                        className={
                          activePage === page
                            ? style.paginationDot
                            : style.emptypaginationDot
                        }
                      ></div>
                    </div>
                  );
                })}
              </div>
            );
          }}
        >
          <div className={style.firstCarousal}>
            <span>TESTIMONIALS 1</span>
            <h1>What People Say</h1>
          </div>
          <div className={style.firstCarousal}>
            <span>TESTIMONIALS 2</span>
            <h1>What People Say</h1>
          </div>
          <div className={style.firstCarousal}>
            <span>TESTIMONIALS 3</span>
            <h1>What People Say</h1>
          </div>
        </ElasticCarousel>
      </div>
      <div style={{ display: "flex", marginBottom: "65px" }}>
        <ElasticCarousel
          ref={carouselRef}
          showArrows={false}
          itemsToShow={1.3}
          verticalMode
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <div direction="row">
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  return (
                    <div
                      style={{ display: "none" }}
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                    ></div>
                  );
                })}
              </div>
            );
          }}
        >
          {tripData?.map(({ mainImg, desc, user, location }) => {
            return (
              <div style={{ position: "relative" }}>
                <div className={style.childDiv}>
                  <img src={mainImg} />
                </div>
                <div className={style.secondCarsoual}>
                  <span>{desc}</span>
                  <h3>{user}</h3>
                  <span>{location}</span>
                </div>
              </div>
            );
          })}
        </ElasticCarousel>

        <div className={style.customButton}>
          <img src={arrowUp} width={30} onClick={handlePrevClick} />
          <img
            width={30}
            style={{ transform: "rotate(180deg)" }}
            src={arrowUp}
            onClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousal;
