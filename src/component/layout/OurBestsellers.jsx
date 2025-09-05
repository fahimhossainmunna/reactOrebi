import React, { useEffect, useState } from "react";

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
import axios from "axios";
// ================

// =====================
const OurBestsellers = () => {
  let [allData,setAllData]=useState([])
  useEffect(()=>{
    async function allData() {
      let data =await axios.get("https://dummyjson.com/products")
      setAllData(data.data.products)

    }
    allData()
  })




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
            {
              allData.map((item)=>(
                <div className="">
                  <Product productImg={item.thumbnail}
                  title={item.title}
                  price={`$${item.price}`}
                  bdgText={"New"}
                  />
                </div>
              ))
            }
        
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default OurBestsellers;
