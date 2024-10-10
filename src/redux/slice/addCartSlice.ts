import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../types'; 

interface CartState {
    cartList: CartItem[];
}

const initialState: CartState = {
    cartList: [],
};

const updateLocalStorage = (cartList: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(cartList));
};

const addCartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.cartList.find(
                item => item.id === action.payload.id && item.color === action.payload.color
            );
            if (!existingItem) {
                state.cartList.push(action.payload);
                updateLocalStorage(state.cartList); 
            }
        },
        removeCart: (state, action: PayloadAction<CartItem>) => {
            const itemToRemove = state.cartList.find(
                item => item.id === action.payload.id && item.color === action.payload.color
            );

            if (itemToRemove) {
                state.cartList = state.cartList.filter(
                    item => item.id !== itemToRemove.id || item.color !== itemToRemove.color
                );
                updateLocalStorage(state.cartList); 
            }
        },
    },
});

export const { addCart, removeCart } = addCartSlice.actions;
export default addCartSlice.reducer;
