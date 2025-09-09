import React, { useEffect, useState } from "react";
import Container from "../Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Product from "../Product";

const ShopBanner = () => {
  let [alldata, setAllData] = useState([]);
  useEffect(() => {
    async function alldata() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldata();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="py-[120px] ">
        <Container>
          <Slider {...settings}>
            {alldata.map((item) => (
              <div>
                <Product
                  productImg={item.thumbnail}
                  bdgText={"new"}
                  price={`$${item.price}`}
                  title={item.title}
                />
              </div>
            ))}
          </Slider>
          <div className="">
            <h3 className="text-[39px] font-bold text-menuHover mb-[50px]">
              Products
            </h3>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ShopBanner;
