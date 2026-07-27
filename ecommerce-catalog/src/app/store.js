import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import filtersReducer from '../features/filters/filtersSlice';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filtersReducer,
    theme: themeReducer,
  },
});