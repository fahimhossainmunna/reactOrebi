import React from "react";
import Container from "../Container";

const NewCustomer = () => {
  return (
    <>
      <div className="py-[55px]">
        <Container>
          <div className="">
            <h2 className="text-[39px] text-[#262626] font-bold ">
              New Customer
            </h2>
            <div className="flex flex-wrap justify-start gap-x-[60px]">
              <div className="w-[508px]">
                <h3 className="text=[16px] text-[#262626] font-bold font-sans leading-[24px] mt-[42px] mb-[10px]">
                  Address 1
                </h3>
                <input
                  type="text"
                  placeholder="4279 Zboncak Port Suite 6212"
                  className="text=[14px] text-[#767676] font-sans w-full"
                />
                <div className="mt-[15px] border-b border-b-[#D8D8D8] w-[507px]"></div>
              </div>
              <div className="w-[508px]">
                <div className="w-[508px]">
                  <h3 className="text=[16px] text-[#262626] font-bold font-sans leading-[24px] mt-[42px] mb-[10px]">
                    Address 2
                  </h3>
                  <input
                    type="text"
                    placeholder="—"
                    className="text=[14px] text-[#767676] font-sans w-full"
                  />
                  <div className="mt-[15px] border-b border-b-[#D8D8D8] w-[507px]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-start gap-x-[60px]">
              <div className="w-[508px]">
                <h3 className="text=[16px] text-[#262626] font-bold font-sans leading-[24px] mt-[42px] mb-[10px]">
                  City
                </h3>
                <input
                  type="email"
                  placeholder="Your city"
                  className="text=[14px] text-[#767676] font-sans w-full"
                />
                <div className="mt-[15px] border-b border-b-[#D8D8D8] w-[507px]"></div>
              </div>
              <div className="w-[508px]">
                <div className="w-[508px]">
                  <h3 className="text=[16px] text-[#262626] font-bold font-sans leading-[24px] mt-[42px] mb-[10px]">
                    Post Code
                  </h3>
                  <input
                    type="number"
                    placeholder="05228"
                    className="text=[14px] text-[#767676] font-sans  w-full"
                  />
                  <div className="mt-[15px] border-b border-b-[#D8D8D8] w-[507px]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-start gap-x-[60px]">
              <div className="w-[508px]">
                <h3 className="text=[16px] text-[#262626] font-bold font-sans leading-[24px] mt-[42px] mb-[10px]">
                  Division
                </h3>
                <select id="division" className="w-full  ">
                  <option value="">Please select</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chattogram">Chattogram</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="rajshahi">Barishal</option>
                  <option value="rajshahi">Khulna</option>
                  <option value="rajshahi">Rangpur</option>
                  <option value="rajshahi">Sylhet</option>
                  <option value="rajshahi">Mymensingh</option>
                
                </select>
                <div className="mt-[15px] border-b border-b-[#D8D8D8] w-[507px]"></div>
              </div>
              <div className="w-[508px]">
                <div className="w-[508px]">
                  <h3 className="text=[16px] text-[#262626] font-bold font-sans leading-[24px] mt-[42px] mb-[10px]">
                    District
                  </h3>
                  <select id="division" className="w-full  ">
                    <option value="">Please select</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chattogram">Chattogram</option>
                    <option value="rajshahi">Rajshahi</option>
                  </select>
                  {/* <input type="number" placeholder='05228' className='text=[14px] text-[#767676] font-sans  ' /> */}
                  <div className="mt-[15px] border-b border-b-[#D8D8D8] w-[507px]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-b-[#D8D8D8] py-[50px]"></div>
        </Container>
      </div>
    </>
  );
};

export default NewCustomer;
