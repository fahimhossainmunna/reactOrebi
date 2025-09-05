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

const Header = () => {
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

            <div className="flex items-center gap-x-3">
              <div className="flex items-center">
               <button onClick={handleBtnn} className="flex" >
                 <FaUserAlt />
                <FaCaretDown />
               </button>
               {sshow &&
               <div className="bg-[#2B2B2B] text-white  absolute top-[22%] right-25 z-10 transition-all  rounded-[5px] w-[200px] text-center">
                <ul>
                  <li className="hover:bg-[#F0F0F0] hover:text-[#262626] transition-all duration-300  py-2">My Account</li>
                  <li className="hover:bg-[#F0F0F0] hover:text-[#262626] transition-all duration-300  py-2">Log Out</li>
                </ul>
               </div>
               }
              </div>
              <FaCartPlus />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
