import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
    },
    reducers:{
        cacheQuerySuggestion:(state,action)=>{
            state = Object.assign(state,action.payload);

        }
    }
})

export const {cacheQuerySuggestion} = searchSlice.actions;
export default searchSlice.reducer;