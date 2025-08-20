import React from "react";

import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import Cap from "/src/assets/cap.png";
import Table from "/src/assets/table.png";
import Headphne from "/src/assets/headphne.png";
import Sunglass from "/src/assets/sunglass.png";

// ================
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
// ================

// =====================
const SpecialOffers = () => {
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
    <div className="pb-[100px]">
      <Container>
        <h3 className="text-[39px] font-bold text-menuHover my-[50px]">
          Our Bestsellers
        </h3>
        <div className="-mx-3">
          <Slider {...settings}>
            <div>
              <Product productImg={Cap} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Table} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Headphne} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Sunglass} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Table} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Headphne} bdgText={"New"} />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffers;
