import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    liked: localStorage.getItem("liked") || null
}

const likedProductSlice = createSlice({
    name: "liked",
    initialState,
    reducers: {
        like: (state, action) => {
            console.log(state, action)
        },
        unLike: (state, action) => {
            console.log(state, action)
        }
    }
})

export const {like, unLike} = likedProductSlice.actions
export default likedProductSlice.reducer