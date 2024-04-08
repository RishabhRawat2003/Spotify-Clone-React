import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UserName : ''
}

const UserSlice = createSlice({
    name:'User',
    initialState,
    reducers:{
        userLogin :(state,action)=>{
            state.UserName = action.payload
        }
    }
})

export const {userLogin} = UserSlice.actions
export default UserSlice