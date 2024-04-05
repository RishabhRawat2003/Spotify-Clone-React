import { configureStore } from "@reduxjs/toolkit";
import  sidebarSlice from './Slices'
import LikeSongSlice from "./LikedSlices";

const store = configureStore({
    reducer:{
        sidebar:sidebarSlice.reducer,
        likeSong:LikeSongSlice.reducer
    }
})

export default store