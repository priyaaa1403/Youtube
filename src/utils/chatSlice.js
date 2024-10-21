import { createSlice } from "@reduxjs/toolkit";
import { COUNT_CHAT } from "../utils/constant";


const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(COUNT_CHAT,1)
             state.messages.unshift(action.payload)
 
        }
    }
})
  
export const {addMessage}= chatSlice.actions;
export default chatSlice.reducer;