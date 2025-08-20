import React from "react";

import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import Wacth from "/src/assets/wacth.png";
import Clock from "/src/assets/clock.png";
import Busket from "/src/assets/buscek.png";
import Cat from "/src/assets/cat.png";

// ================
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
// ================

// =====================
const NewArrivals = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="py-6">
      <Container>
        <h3 className="text-[39px] font-bold text-menuHover my-[50px]">
          Our Bestsellers
        </h3>
        <div className="-mx-3">
          <Slider {...settings}>
            <div>
              <Product productImg={Wacth} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Clock} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Busket} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Cat} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Wacth} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Busket} bdgText={"New"} />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
