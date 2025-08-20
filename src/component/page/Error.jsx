import React from 'react'

import Container from '../Container'
import { Link } from 'react-router-dom'
import Image from '../Image'
import error from "/src/assets/errror.gif"

const Error = () => {
  return (
   <>
   <Container>
    <Link to={"/"}>
    <Image imgSrc={error}/>
        </Link>
   </Container>
   </>
  )
}

export default Error