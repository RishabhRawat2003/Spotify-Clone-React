import { createSlice } from "@reduxjs/toolkit";



const LikeSongSlice = createSlice({
    name: 'Liked',
    initialState:[],
    reducers:{
        toggleLikedSong:(state,action)=>{
            let index = state.indexOf(action.payload)
            if(index!==-1){
                state.splice(index,1)
            }else{
                state.push(action.payload)
            }
        }
    }
})

export default LikeSongSlice
export const {toggleLikedSong} = LikeSongSlice.actions