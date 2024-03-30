import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarStatus: false,
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        sidebarToggle: (state, action) => {
            state.sidebarStatus = !action.payload
        }
    }
})

export const {sidebarToggle} = sidebarSlice.actions
export default sidebarSlice