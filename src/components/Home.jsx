import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Prime Banner"
      />
      {/* Product props i.e id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="123"
          title="Hamilton Beach Wave Crusher Blender with 40oz Glass Jar and 14 Functions for Puree, Ice Crush, Shakes and Smoothies, Stainless Steel (54221)"
          price={18.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71QSw159rhL._AC_SL1500_.jpg"
        />
        <Product
          id="1234"
          title="Xbox Wireless Controller - Grey And Blue"
          price={58.5}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/619%2BiRxAVqL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12345"
          title="A Promised Land Hardcover – November 17, 2020"
          price={27.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg"
        />
        <Product
          id="123456"
          title="Summer 3Dlite Convenience Stroller, Black (2016)"
          price={65.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81Pio5ODYjL._SL1500_.jpg"
        />
        <Product
          id="1234567"
          title="Zacurate Pro Series 500DL Fingertip Pulse Oximeter Blood Oxygen Saturation Monitor with Silicon Cover, Batteries and Lanyard (Royal Black)"
          price={29.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61s427GiJBL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12345678"
          title="SAMSUNG Q60T Series 50-inch Class QLED Smart TV | 4K, UHD Dual LED Quantum HDR | Alexa Built-in | QN50Q60TAFXZA, 2020 Model"
          price={569.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61fKzrson-L._AC_SL1000_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
