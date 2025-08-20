import React from "react";

import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import Bootle from "/src/assets/bootle.png";
import Backpack from "/src/assets/backpackone.png";
import Mashala from "/src/assets/masala.png";
import Bag from "/src/assets/bag.png";

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
              <Product productImg={Bootle} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Backpack} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Mashala} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Bag} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Bootle} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Backpack} bdgText={"New"} />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
