import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LikedProductState {
    liked: string[];
}

const initialState: LikedProductState = {
    liked: JSON.parse(localStorage.getItem("liked") || "[]"), // Parse the liked items from localStorage
};

const likedProductSlice = createSlice({
    name: "liked",
    initialState,
    reducers: {
        like: (state, action: PayloadAction<string>) => {
            if (!state.liked.includes(action.payload)) {
                state.liked.push(action.payload); // Add the liked product to the array
                localStorage.setItem("liked", JSON.stringify(state.liked)); // Update localStorage
            }
        },
        unLike: (state, action: PayloadAction<string>) => {
            state.liked = state.liked.filter(id => id !== action.payload); // Remove the liked product from the array
            localStorage.setItem("liked", JSON.stringify(state.liked)); // Update localStorage
        },
    },
});

export const { like, unLike } = likedProductSlice.actions;
export default likedProductSlice.reducer;
