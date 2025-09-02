import React from 'react'
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
              <FaBarsStaggered />
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
                <FaUserAlt />
                <FaCaretDown />
              </div>
              <FaCartPlus />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Header