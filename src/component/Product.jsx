import React from "react";
import Image from "./Image";

import Badge from "./Badge";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { RiShoppingCartFill } from "react-icons/ri";

// =====================
const Product = ({ productImg, bdgText }) => {
  return (
    <>
      <div className="relative px-3">
        <Image imgSrc={productImg} className={"w-full"} />
        <Badge className={"absolute top-5 left-5"} badgeText={bdgText} />
        <div className="bg-transparent p-4 group opacity-0 hover:opacity-100 absolute left-0 bottom-12 w-full duration-700">
          <div className="flex items-center gap-x-3 justify-end">
            <h3 className="text-[16px] text-menuColor hover:text-menuHover hover:font-bold duration-300">Add to Wish List</h3>
            <FaHeart />
          </div>
          <div className="flex items-center gap-x-3 justify-end">
            <h3 className="text-[16px] text-menuColor hover:text-menuHover hover:font-bold duration-300">Compare</h3>
            <HiRefresh />
          </div>
          <div className="flex items-center gap-x-3 justify-end">
            <h3 className="text-[16px] text-menuColor hover:text-menuHover hover:font-bold duration-300">Add to Cart</h3>
            <RiShoppingCartFill />
          </div>
        </div>
        <Flex className={"justify-between mt-4"}>
          <h3 className="font-bold text-[20px] text-menuHover">
            Basic Crew Neck Tee
          </h3>
          <h3 className="text-[16px] text-menuColor">$40.00</h3>
        </Flex>
      </div>
    </>
  );
};

export default Product;
