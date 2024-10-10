import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LikedProductState {
    liked: string[];
}

const initialState: LikedProductState = {
    liked: JSON.parse(localStorage.getItem("liked") || "[]"),
};

const likedProductSlice = createSlice({
    name: "liked",
    initialState,
    reducers: {
        like: (state, action: PayloadAction<string>) => {
            if (!state.liked.includes(action.payload)) {
                state.liked.push(action.payload);
                localStorage.setItem("liked", JSON.stringify(state.liked));
            }
        },
        unLike: (state, action: PayloadAction<string>) => {
            state.liked = state.liked.filter(id => id !== action.payload);
            localStorage.setItem("liked", JSON.stringify(state.liked));
        },
    },
});

export const { like, unLike } = likedProductSlice.actions;
export default likedProductSlice.reducer;
