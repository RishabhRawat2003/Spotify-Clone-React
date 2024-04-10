import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songId: '',
}

const songSlice = createSlice({
    name: 'musicplayer',
    initialState,
    reducers: {
        songPlayer: (state, action) => {
            state.songId = ''
            state.songId = action.payload
        }
    }
})

export const {songPlayer} = songSlice.actions
export default songSlice