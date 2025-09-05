import React from 'react'
import Container from '../Container'

const Personal = () => {
  return (
   <>
   <div className="pt-[55px] pb-[55px]">
    <Container>
        <div className="">
            <h2 className='text-[39px] text-[#262626] font-bold '>Your Personal Details</h2>
            <div className="flex flex-wrap justify-start gap-x-[60px]">
                <div className="w-[508px]">
                    <h3 className='text=[16px] text-[#262626] font-bold font-sans leading-[24px] mt-[42px] mb-[10px]'>First Name</h3>
                    <input type="text" placeholder='First Name' className='text=[14px] text-[#767676] font-sans w-full' />
                <div className="mt-[15px] border-b border-b-[#D8D8D8] w-[507px]"></div>
                </div>
                <div className="w-[508px]">
                    <div className="w-[508px]">
                    <h3 className='text=[16px] text-[#262626] font-bold font-sans leading-[24px] mt-[42px] mb-[10px]'>Last Name</h3>
                    <input type="text" placeholder='Last Name' className='text=[14px] text-[#767676] font-sans w-full' />
                <div className="mt-[15px] border-b border-b-[#D8D8D8] w-[507px]"></div>
                </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-start gap-x-[60px]">
                <div className="w-[508px]">
                    <h3 className='text=[16px] text-[#262626] font-bold font-sans leading-[24px] mt-[42px] mb-[10px]'>Email address</h3>
                    <input type="email" placeholder='company@domain.com' className='text=[14px] text-[#767676] font-sans w-full' />
                <div className="mt-[15px] border-b border-b-[#D8D8D8] w-[507px]"></div>
                </div>
                <div className="w-[508px]">
                    <div className="w-[508px]">
                    <h3 className='text=[16px] text-[#262626] font-bold font-sans leading-[24px] mt-[42px] mb-[10px]'>Telephone</h3>
                    <input type="number" placeholder='Your phone number' className='text=[14px] text-[#767676] font-sans  w-full' />
                <div className="mt-[15px] border-b border-b-[#D8D8D8] w-[507px]"></div>
                </div>
                </div>
            </div>
        </div>
                   <div className="border-b border-b-[#D8D8D8] py-[50px]"></div>
    </Container>
   </div>
   </>
  )
}

export default Personal