import { createSlice } from "@reduxjs/toolkit";

export const addToCartslice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state,action) => {
        let alldata =state.value.find(item=>item.title===action.payload.title)
        if(alldata){
          alldata.quantity+=1;
        }else{
            state.value.push({...action.payload,quantity:1})
        }
    },
  },
});

export const { addtocart } = addToCartslice.actions;

export default addToCartslice.reducer;
