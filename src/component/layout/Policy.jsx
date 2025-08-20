import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { TbNumber2 } from "react-icons/tb";
import { FaTruck,FaUndo } from "react-icons/fa";

const Policy = () => {
  return (
     <div className="bg-white py-5">
    <Container>
        <Flex className={"justify-between"}>
            <div className="flex gap-x-2 items-center">
                <TbNumber2 />
                <h3 className="text-[16px] text-[#6D6D6D]">Two years warranty</h3>
            </div>
            <div className="flex gap-x-2 items-center">
               <FaTruck />
                <h3 className="text-[16px] text-[#6D6D6D]">Free shipping</h3>
            </div>
            <div className="flex gap-x-2 items-center">
               <FaUndo />
                <h3 className="text-[16px] text-[#6D6D6D]">Return policy in 30 days</h3>
            </div>
           
        </Flex>
    </Container>
   </div>
  )
}

export default Policy