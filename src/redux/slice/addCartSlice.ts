import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
    id: string;
    api_featured_image: string;
    name: string;
    product_type: string;
    price: number;
    rating: number | null;
    product_colors: { hex_value: string; colour_name: string }[];
}

interface CartItem extends Product {
    color: string; 
}

interface AddCartState {
    cartList: CartItem[];
}

const initialState: AddCartState = {
    cartList: JSON.parse(localStorage.getItem("cart") || "[]") || [],
};

const addCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.cartList.find(item => item.id === action.payload.id && item.color === action.payload.color);
            if (!existingItem) {
                state.cartList.push(action.payload);
                localStorage.setItem("cart", JSON.stringify(state.cartList));
            }
        },
        removeCart: (state, action: PayloadAction<CartItem>) => {
            state.cartList = state.cartList.filter(item => item.id !== action.payload.id || item.color !== action.payload.color);
            localStorage.setItem("cart", JSON.stringify(state.cartList));
        },
    },
});

export const { addCart, removeCart } = addCartSlice.actions;
export default addCartSlice.reducer;
