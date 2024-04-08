import { configureStore } from "@reduxjs/toolkit";
import  sidebarSlice from './Slices'
import LikeSongSlice from "./LikedSlices";
import UserSlice from "./UserSlices";

const store = configureStore({
    reducer:{
        sidebar:sidebarSlice.reducer,
        likeSong:LikeSongSlice.reducer,
        userName:UserSlice.reducer
    }
})

export default store