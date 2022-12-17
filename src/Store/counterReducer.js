import { createSlice } from "@reduxjs/toolkit";
const initState = {value : 0 , showCounter:true}

const counterSlice = createSlice({
    name: 'counter' ,
    initialState:initState,
    reducers: {
        INCREASE : (state) => {
            state.value+=1;
        } ,
        DECREASE : (state) => {
            state.value-=1;
        },
        TOGGLE_COUNTER: (state)=> {
            state.showCounter = !state.showCounter;
        },
    },
})

export const {INCREASE , DECREASE , TOGGLE_COUNTER} =counterSlice.actions;
export default counterSlice.reducer;
