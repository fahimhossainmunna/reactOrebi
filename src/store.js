import { configureStore } from '@reduxjs/toolkit'
import  addToCartslice  from './slice/addToCartslice'

export default configureStore({
  reducer: {
    addtocart: addToCartslice
  },
})