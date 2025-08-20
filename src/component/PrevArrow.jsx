import React from 'react'
import { RiArrowLeftSLine } from "react-icons/ri";

const PrevArrow = (props) => {
     const {  onClick } = props;
  return (
      <div
          className={"text-5xl text-transparent hover:text-black absolute duration-500 left-5 top-1/2 -translate-y-1/2 z-10"}
        
          onClick={onClick}
        ><RiArrowLeftSLine />
    </div>
  )
}

export default PrevArrow