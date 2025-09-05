import React from 'react'

const Button = ({children,className}) => {
  return (
   <div className={`px-3 py-3 ${className}`}>{children}</div>
  )
}

export default Button