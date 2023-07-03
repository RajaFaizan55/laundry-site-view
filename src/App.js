import { useEffect, useState } from "react";

import NavBar from "./components/navbar";
import SpalshScreen from "./components/splash-screen";
import CategoryCard from "./components/category-card";
import Carousal from "./components/carousal-section";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";
import DestinationCard from "./components/destination-card";
import BookTrip from "./components/book-trip";
import Trip from "./components/trip";
import LogoSection from "./components/logo-section";

import { bookTripData, categoryData, destinationData } from "./helper";

import "./App.css";

function App() {
  const [splashToggle, setSplashToggle] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashToggle(false);
    }, 6000);
  }, []);

  return (
    <>
      {splashToggle ? (
        <SpalshScreen />
      ) : (
        <div>
          <NavBar />
          <div className="mainContainer">
            <div className="category">
              <div className="centerDiv">
                <p>CATEGORY</p>
                <h1>We Offer Best Services</h1>
              </div>
              <div className="cardsDiv">
                {categoryData?.map((item, index) => {
                  return (
                    <CategoryCard
                      img={item?.img}
                      title={item?.Title}
                      desc={item?.desc}
                    />
                  );
                })}
              </div>
            </div>

            <div className="category">
              <div className="centerDiv">
                <p>Top Selling</p>
                <h1>Top Destinations</h1>
              </div>
              <div className="cardsDiv">
                {destinationData?.map((item, index) => {
                  return (
                    <DestinationCard
                      img={item?.img}
                      title={item?.title}
                      price={item?.price}
                      duration={item?.duration}
                    />
                  );
                })}
              </div>
            </div>

            <div className="easyandFast ">
              <span>Easy and Fast</span>
              <h1>Book Your Next Trip</h1>
              <div className="twoGrid">
                <div>
                  {bookTripData?.map((item, index) => {
                    return (
                      <BookTrip
                        img={item?.img}
                        title={item?.title}
                        desc={item?.desc}
                        bgColor={item?.bgColor}
                      />
                    );
                  })}
                </div>
                <div className="triCard">
                  <Trip />
                </div>
              </div>
            </div>

            <Carousal />
            <LogoSection />
            <Subscribe />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
