import React, { useState } from "react";
import Slider from "react-slick";
import slide1 from "../../assets/images/vecteezy_online-shopping-on-phone-buy-sell-business-digital-web_4299835.jpg";
import slide2 from "../../assets/images/30033578-2c2c-4dba-8d4f-fe0d1f9642d9.avif";
import slide3 from "../../assets/images/a4f4b458-c1f1-424c-aa1f-fd5bd2a8d41f.avif";
import slide4 from "../../assets/images/a9050047-dcaa-4cf7-ba07-7e2de6d5bb98.avif";
import slide5 from "../../assets/images/54c32f86-795b-48f3-be68-611a1ee531c7.avif";
import slide6 from "../../assets/images/1e2ea023-2cc9-45aa-bcfc-338e41c13b8f.avif";
import slide7 from "../../assets/images/84b8f2b7-1f54-4ecd-a4bb-507dddfcd8f3.avif";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  return (
    <section>
      {" "}
      <Slider className="" {...settings}>
        <img src={slide1} alt="" />
        <img src={slide2} alt="" />
        <img src={slide3} alt="" />
        <img src={slide4} alt="" />
        <img src={slide5} alt="" />
        <img src={slide6} alt="" />
        <img src={slide7} alt="" />
      </Slider>
    </section>
  );
}

