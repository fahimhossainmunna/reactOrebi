import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";

const Header = () => {
  let [showCart, setShowCart] = useState(false);
  let [animateCart, setAnimateCart] = useState(false); // animation state
  let data = useSelector((state) => state.addtocart.value);

  let [show, setshow] = useState(false);
  const handleBtn = () => {
    setshow(!show);
  };
  let [sshow, ssetshow] = useState(false);
  const handleBtnn = () => {
    ssetshow(!sshow);
  };

  // open with animation
  const openCart = () => {
    setShowCart(true);
    setTimeout(() => setAnimateCart(true), 10);
  };

  // close with animation
  const closeCart = () => {
    setAnimateCart(false);
    setTimeout(() => setShowCart(false), 500);
  };

  return (
    <>
      <div className="py-[30px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[40%]">
              <Link to={"/"}>
                <Image imgSrc={logo} />
              </Link>
            </div>
            <div className="w-[70%]">
              <ul className="flex gap-x-5 text-menuColor text-[14px]">
                <Link to={"/"}>
                  <li className="hover:text-menuHover hover:font-bold duration-200">
                    Home
                  </li>
                </Link>
                <Link to={"Shop"}>
                  <li className="hover:text-menuHover hover:font-bold duration-200">
                    Shop
                  </li>
                </Link>
                <Link to={"About"}>
                  <li className="hover:text-menuHover hover:font-bold duration-200">
                    About
                  </li>
                </Link>
                <Link to={"Contacts"}>
                  <li className="hover:text-menuHover hover:font-bold duration-200">
                    Contacts
                  </li>
                </Link>
                <Link to={"Journal"}>
                  <li className="hover:text-menuHover hover:font-bold duration-200">
                    Journal
                  </li>
                </Link>
                <Link to={"signup"}>
                  <li className="hover:text-menuHover hover:font-bold duration-200">
                    Sign up
                  </li>
                </Link>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>

      <div className="bg-menuColortwo py-[25px]">
        <Container>
          <Flex className={"justify-between"}>
            {/* Category Dropdown */}
            <div className="flex items-center gap-x-2">
              <button onClick={handleBtn}>
                <FaBarsStaggered />
              </button>
              {show && (
                <div className="bg-[#2C2C2C] absolute py-2 top-[22%] left-25 z-10 transition-all rounded-[5px] w-[200px] text-center">
                  <ul>
                    <li className="block py-2 rounded-[5px] text-[rgba(255,255,255,0.7)] hover:text-white hover:font-bold text-[16px] font-pop transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                      Accesories
                    </li>
                    <li className="block py-2 rounded-[5px] text-[rgba(255,255,255,0.7)] hover:text-white hover:font-bold text-[16px] font-pop transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                      Furniture
                    </li>
                    <li className="block py-2 rounded-[5px] text-[rgba(255,255,255,0.7)] hover:text-white hover:font-bold text-[16px] font-pop transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                      Electronics
                    </li>
                    <li className="block py-2 rounded-[5px] text-[rgba(255,255,255,0.7)] hover:text-white hover:font-bold text-[16px] font-pop transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                      Clothes
                    </li>
                    <li className="block py-2 rounded-[5px] text-[rgba(255,255,255,0.7)] hover:text-white hover:font-bold text-[16px] font-pop transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                      Bags
                    </li>
                    <li className="block py-2 rounded-[5px] text-[rgba(255,255,255,0.7)] hover:text-white hover:font-bold text-[16px] font-pop transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                      Home appliances
                    </li>
                  </ul>
                </div>
              )}
              <h3>Shop by Category</h3>
            </div>

            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="border border-black px-4 py-2 w-[600px] bg-white rounded-[2px] outline-0 placeholder:text-[#C4C4C4]"
              />
              <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2" />
            </div>

            {/* User & Cart */}
            <div className="flex items-center gap-x-3 relative">
              <div className="flex items-center">
                <button onClick={handleBtnn} className="flex">
                  <FaUserAlt />
                  <FaCaretDown />
                </button>
                {sshow && (
                  <div className="bg-[#2B2B2B] text-white absolute top-[99%] right-[30px] z-10 rounded-[5px] w-[200px] text-center">
                    <ul>
                      <li className="hover:bg-[#F0F0F0] hover:text-[#262626] transition-all duration-300 py-2">
                        My Account
                      </li>
                      <li className="hover:bg-[#F0F0F0] hover:text-[#262626] transition-all duration-300 py-2">
                        Log Out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <FaCartPlus className="cursor-pointer" onClick={openCart} />
            </div>
          </Flex>
        </Container>
      </div>

      {/* ===================== CART SIDEBAR ===================== */}
      {showCart && (
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 ${
            animateCart ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeCart}
        >
          <div
            className={`fixed top-0 right-0 h-full w-[800px] bg-[#d6d9df] shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
              animateCart ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Btn */}
            <button
              className="absolute top-4 right-4 text-black"
              onClick={closeCart}
            >
              <ImCross className="text-white absolute right-[750px]"/>
            </button>

            {/* Header */}
            <div className="w-full py-5 bg-[#032936] text-white ">
              <ul className="flex text-center justify-between items-center px-4">
                <li className="w-[20%] border-r-1 font-bold">Name</li>
                <li className="w-[20%] border-r-1 font-bold">Price</li>
                <li className="w-[15%] border-r-1 font-bold">Quantity</li>
                <li className="w-[20%] border-r-1 font-bold">Image</li>
                <li className="w-[15%]  font-bold">Total</li>
              </ul>
            </div>

           
            <div className="p-4 space-y-3 overflow-y-auto h-[80%]">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border border-black rounded-[5px] p-3 hover:shadow-md transition"
                >
                  <span className="w-[20%] flex items-center">{item.title}</span>
                  <span className="w-[20%] flex items-center justify-center">
                    {item.price}
                  </span>
                  <span className="w-[15%] flex items-center justify-center">
                    {item.quantity}
                  </span>
                  <span className="w-[20%] flex items-center justify-center">
                    <img
                      className="w-[70px] h-[70px] object-cover rounded"
                      src={item.productImg}
                      alt=""
                    />
                  </span>
                  <span className="w-[15%] flex items-center justify-center font-semibold">
                    $
                    {(
                      parseFloat(item.price.replace("$", "")) *
                      Number(item.quantity)
                    ).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
