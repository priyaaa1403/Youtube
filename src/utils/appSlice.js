import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name:"app",
    initialState:{
        panelState:true,
        popularVideos:null
    },
    reducers:{
        changePanelState : (state)=>{
            state.panelState = !state.panelState;

        },
        collapsePanel : (state)=>{
          state.panelState = false;
        } ,

        addPopularVideos : (state,action) =>{
            state.popularVideos = action.payload;
        }

    }
})

export const {changePanelState,collapsePanel, addPopularVideos} = appSlice.actions;
export default appSlice.reducer;