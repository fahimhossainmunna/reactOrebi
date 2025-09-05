import React, { useEffect, useState } from "react";

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
import axios from "axios";
// ================

// =====================
const NewArrivals = () => {
  let [allData, setAllData] = useState([]);
  useEffect(() => {
    async function allData() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products)
        }
    allData();
  }, []);
  // let [allData,setAllData]=useState([])
  // useEffect(()=>{
  //   async function alldatas() {
  //       let data = await axios.get("https://dummyjson.com/products");
  //       setAllData(data.data.products)
  //     }
  //     alldatas();
  // }, []);

  // let [allData, setAllData] = useState([]);

  // useEffect(() => {

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
        <h3 className="text-[39px] font-bold text-menuHover mb-[50px]">
          New Arrivals
        </h3>
        <div className="-mx-3">
          <Slider {...settings}>
            {allData.map((item) => (
              <div>
                <Product
                  productImg={item.thumbnail}
                  bdgText={"new"}
                  price={item.price}
                  title={item.title}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
