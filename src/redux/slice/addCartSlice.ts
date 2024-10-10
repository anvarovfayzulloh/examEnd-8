import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AddCartState {
    cartList: string[];
}

const initialState: AddCartState = {
    cartList: JSON.parse(localStorage.getItem("cart") || "[]"),
};

const addCartSlice = createSlice({
    name: "liked",
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<string>) => {
            if (!state.cartList.includes(action.payload)) {
                state.cartList.push(action.payload);
                localStorage.setItem("cart", JSON.stringify(state.cartList));
            }
        },
        removeCart: (state, action: PayloadAction<string>) => {
            if (!state.cartList.includes(action.payload)) {
                state.cartList.push(action.payload);
                localStorage.setItem("cart", JSON.stringify(state.cartList));
            }
        },
    },
});

export const { addCart, removeCart} = addCartSlice.actions;
export default addCartSlice.reducer;
