import React from 'react'

const Badge = ({className,badgeText}) => {
  return (
    <>
    <div className={`py-2 px-[30px] w-[90px] bg-black text-white ${className}`}>{badgeText}</div>
    </>
  )
}

export default Badge