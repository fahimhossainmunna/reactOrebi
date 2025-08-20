import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";


const NextArrow = (props) => {
     const { className, style, onClick } = props;
  return (
   <div
      className={"text-5xl text-transparent hover:text-black absolute duration-500 right-5 top-1/2 -translate-y-1/2"}
    
      onClick={onClick}
    ><RiArrowRightSLine />
</div>
  )
}

export default NextArrow