import React from "react";
import Container from "../Container";
import Button from "../Button";

const YourPassword = () => {
  return (
    <>
      <Container>
        <div className="">
          <h2 className="text-[39px] text-[#262626] font-bold ">
            Your Password
          </h2>
          <div className="flex flex-wrap justify-start gap-x-[60px]">
            <div className="w-[508px]">
              <h3 className="text=[16px] text-[#262626] font-bold font-sans leading-[24px] mt-[42px] mb-[10px]">
                Password
              </h3>
              <input
                type="Password"
                placeholder="Password"
                className="text=[14px] text-[#767676] font-sans w-full"
              />
              <div className="mt-[15px] border-b border-b-[#D8D8D8] w-[507px]"></div>
            </div>
            <div className="w-[508px]">
              <div className="w-[508px]">
                <h3 className="text=[16px] text-[#262626] font-bold font-sans leading-[24px] mt-[42px] mb-[10px]">
                  Repeat Password
                </h3>
                <input
                  type="Password"
                  placeholder="Repeat Password"
                  className="text=[14px] text-[#767676] font-sans w-full"
                />
                <div className="mt-[15px] border-b border-b-[#D8D8D8] w-[507px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-b-[#D8D8D8] py-[50px]"></div>
        <div className="py-[50px] flex items-center gap-x-3 pb-[25px] text-[14px] text-[#767676] font-sans">
            <input type="checkbox" />
            <h3>I have read and agree to the Privacy Policy</h3>
        </div>
        <div className="flex items-center gap-x-4 pb-[25px] text-[14px] text-[#767676] font-sans">
            <h3>Subscribe Newsletter</h3>
             <input type="radio" name="option"/>Yes
             <input type="radio" name="option"/>No
        </div>
        <Button className="bg-[#262626] w-[200px] text-white text-center mb-[100px]">
            Log in
        </Button>
        
      </Container>
    </>
  );
};


export default YourPassword;
