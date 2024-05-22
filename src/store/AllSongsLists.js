import { createSlice } from "@reduxjs/toolkit";

const AllSongsSlice = createSlice({
    name: 'allSongsList',
    initialState: [],
    reducers: {
        addList: (state, action) => {
            state.length = 0

            state.push(...action.payload)
        }
    }
})

export const { addList } = AllSongsSlice.actions
export default AllSongsSlice