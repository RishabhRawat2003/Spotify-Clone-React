import { configureStore } from "@reduxjs/toolkit";
import  sidebarSlice from './Slices'

const store = configureStore({
    reducer:{
        sidebar:sidebarSlice.reducer
    }
})

export default store