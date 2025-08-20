import React from 'react'
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import Image from "../Image";
import flogo from "/src/assets/fotlogo.png"
import { FaFacebookF,FaLinkedin,FaInstagram   } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-menuColortwo py-[70px]">
        <Container>
          <Flex className="justify-between">
            <div className="">
              <h3 className="py-3 text-[16px] text-[#262626] font-bold">MENU</h3>
              <ul className=" text-menuColor text-[14px]">
                <Link>
                  <li className="py-1 hover:text-menuHover hover:font-bold duration-200">
                    Home
                  </li>
                </Link>
                <Link>
                  <li className="py-1 hover:text-menuHover hover:font-bold duration-200">
                    Shop
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHover py-1 hover:font-bold duration-200">
                    About
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHover py-1 hover:font-bold duration-200">
                    Contacts
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHover py-1 hover:font-bold duration-200">
                    Journal
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <h3 className="py-3 text-[16px] text-[#262626] font-bold">SHOP</h3>
              <ul className=" text-menuColor text-[14px]">
                <Link>
                  <li className="hover:text-menuHover py-1 hover:font-bold duration-200">
                    Category 1
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHover py-1 hover:font-bold duration-200">
                    Category 2
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHover py-1 hover:font-bold duration-200">
                    Category 3
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHover py-1 hover:font-bold duration-200">
                    Category 4
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHover py-1 hover:font-bold duration-200">
                    Category 5
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <h3 className="py-3 text-[16px] text-[#262626] font-bold">HELP</h3>
              <ul className=" text-menuColor text-[14px]">
                <Link>
                  <li className="hover:text-menuHover py-1 hover:font-bold duration-200">
                    Privacy Policy
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHover py-1 hover:font-bold duration-200">
                    Terms & Conditions
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHover py-1 hover:font-bold duration-200">
                    Special E-shop
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHover py-1 hover:font-bold duration-200">
                    Shipping
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHover py-1 hover:font-bold duration-200">
                    Secure Payments
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <h3 className="text=[16px] py-2 font-bold leading-[27px]">(052) 611-5711</h3>
              <h4 className="text=[16px] py-2 font-bold leading-[27px]">company@domain.com</h4>
              <p className="text=[14px] py-2 text-[#6D6D6D] leading-[23px]">575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div className="">
              <Image imgSrc={flogo}/>
            </div>
            
          </Flex>
          <div className="flex gap-x-5 mt-10 items-center justify-between">
            <div className="flex gap-x-5 items-center">
              <FaFacebookF />
            <FaLinkedin />
            <FaInstagram />
            </div>
            <div className="">
              <p className="text-[#6D6D6D] text-[14px] leading-[23px]">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer