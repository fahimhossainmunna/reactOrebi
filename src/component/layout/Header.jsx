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
  let data = useSelector((state) => state.addtocart.value);

  let [show, setshow] = useState(false);
  const handleBtn = () => {
    setshow(!show);
  };
  let [sshow, ssetshow] = useState(false);
  const handleBtnn = () => {
    ssetshow(!sshow);
  };
  return (
    <>
      <div className="py-[30px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[40%]">
              <Link to={"/"}>
                {" "}
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
                    About{" "}
                  </li>
                </Link>
                <Link to={"Contacts"}>
                  {" "}
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
            <div className="flex items-center gap-x-2">
              <button onClick={handleBtn}>
                <FaBarsStaggered />
              </button>
              {show && (
                <div className="bg-[#2C2C2C] absolute py-2 top-[22%] left-25 z-10 transition-all  rounded-[5px] w-[200px] text-center">
                  <ul>
                    <li className="block py-2  rounded-[5px] text-[rgba(255,255,255,0.7)] hover:text-white hover:font-bold text-[16px] font-pop text-center transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                      Accesories
                    </li>

                    <li className="block py-2  rounded-[5px] text-[rgba(255,255,255,0.7)] hover:text-white hover:font-bold text-[16px] font-pop text-center transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                      Furniture
                    </li>

                    <li className="block py-2  rounded-[5px] text-[rgba(255,255,255,0.7)] hover:text-white hover:font-bold text-[16px] font-pop text-center transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                      Electronics
                    </li>

                    <li className="block py-2  rounded-[5px] text-[rgba(255,255,255,0.7)] hover:text-white hover:font-bold text-[16px] font-pop text-center transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                      Clothes
                    </li>
                    <li className="block py-2  rounded-[5px] text-[rgba(255,255,255,0.7)] hover:text-white hover:font-bold text-[16px] font-pop text-center transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                      Bags
                    </li>
                    <li className="block py-2  rounded-[5px] text-[rgba(255,255,255,0.7)] hover:text-white hover:font-bold text-[16px] font-pop text-center transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                      Home appliances
                    </li>
                  </ul>
                </div>
              )}

              <h3>Shop by Category</h3>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="border border-black px-4 py-2 w-[600px] bg-white rounded-[2px] outline-0 placeholder:text-[#C4C4C4]"
              />
              <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2" />
            </div>

            <div className="flex items-center gap-x-3 relative">
              <div className="flex items-center">
                <button onClick={handleBtnn} className="flex">
                  <FaUserAlt />
                  <FaCaretDown />
                </button>
                {sshow && (
                  <div className="bg-[#2B2B2B] text-white  absolute top-[99%] right-[30px] z-10 transition-all  rounded-[5px] w-[200px] text-center">
                    <ul>
                      <li className="hover:bg-[#F0F0F0] hover:text-[#262626] transition-all duration-300  py-2">
                        My Account
                      </li>
                      <li className="hover:bg-[#F0F0F0] hover:text-[#262626] transition-all duration-300  py-2">
                        Log Out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <FaCartPlus onClick={() => setShowCart(!showCart)} />
            </div>
          </Flex>
          {showCart && (
            <>
            <div className="relative">
            <div
              className=" w-[800px] bg-[#F5F5F3]  rounded-[5px] z-10 absolute right-0 top-0"
              onClick={() => setShowCart(!showCart)}
            >
              <ImCross />

              <ul>
                <div className="w-full py-5 bg-[#A0BBBA] rounded-[5px] ">
                  <ul className="flex text-center justify-between items-center">
                    <li className="w-[20%] m-auto text-black font-bold text-[16px]">
                      Name
                    </li>
                    <li className="w-[25%] m-auto text-black font-bold text-[16px]">
                      price
                    </li>
                    <li className="w-[20%] m-auto text-black font-bold text-[16px]">
                      Quantity
                    </li>
                    <li className="w-[15%] m-auto text-black font-bold text-[16px]">
                      Image
                    </li>
                    <li className="w-[15%] m-auto text-black font-bold text-[16px] ">
                      Total
                    </li>
                  </ul>
                </div>
                {data.map((item) => (
                  <div className="flex justify-between p-5 border border-black rounded-[5px]">
                    <li className="w-[29%] m-auto">{item.title}</li>
                    <li className="w-[20%] m-auto">{item.price}</li>
                    <li className="w-[15%] m-auto">{item.quantity}</li>
                    <li className="w-[15%] m-auto">
                      <img className="" src={item.productImg} />
                    </li>
                    <li className="w-[10%] m-auto">{(item.price * item.quantity)}</li>
                  </div>
                ))}
              </ul>
            </div>
            </div>
          </>
          )}
        </Container>
      </div>
    </>
  );
};

export default Header;
