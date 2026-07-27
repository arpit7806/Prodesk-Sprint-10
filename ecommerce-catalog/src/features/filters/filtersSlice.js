import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'all',
  minPrice: 0,
  maxPrice: 1000,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },
    resetFilters: () => initialState,
  },
});

export const { setCategory, setPriceRange, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;