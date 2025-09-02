import React from "react";
import Container from "../Container";
import { FaAngleRight } from "react-icons/fa";

const SingUppart = () => {
  return (
    <>
      <div className="py-15 ">
        <Container>
          <div className="">
            <h3 className="text-[49px] text-[#262626] font-bold font-sans pt-[100px] pb-[10px]">
              Sign Up
            </h3>

            <div className="flex items-center gap-x-2 text-[12px] text-[#6D6D60] font-sans pb-[120px]">
              <h3>Home</h3>
              <span>
                <FaAngleRight />
              </span>
              <h3>Sign up</h3>
            </div>
            <div className="text-[16px] text-[#767676] font-sans leading-[30px] w-[644px] pb-[60px]">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the.
              </p>
            </div>
              <div className="border-b border-b-[#D8D8D8]"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SingUppart;
