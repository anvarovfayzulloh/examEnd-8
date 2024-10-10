// redux/slice/currencySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
  currency: string;
}

const initialState: CurrencyState = {
  currency: localStorage.getItem('currency') || '£',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
      localStorage.setItem('currency', action.payload);
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
