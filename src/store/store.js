import { configureStore } from "@reduxjs/toolkit";
import  sidebarSlice from './Slices'
import LikeSongSlice from "./LikedSlices";
import UserSlice from "./UserSlices";
import songSlice from "./SongSlices";

const store = configureStore({
    reducer:{
        sidebar:sidebarSlice.reducer,
        likeSong:LikeSongSlice.reducer,
        userName:UserSlice.reducer,
        musicplayer:songSlice.reducer,
    }
})

export default store