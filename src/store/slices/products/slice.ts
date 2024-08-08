import { createSlice } from '@reduxjs/toolkit';

type Product = {
  products: any[];
  favoriteProductsIds: string[];
  error: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
};

const initialState = {
  products: [],
  error: null,
  favoriteProductsIds: [],
  status: 'idle',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState as Product,
  reducers: {
    addFavoriteListing: (state, action) => {
      state.favoriteProductsIds.push(action.payload);
    },
    removeFavoriteListing: (state, action) => {
      state.favoriteProductsIds = state.favoriteProductsIds.filter(
        (id) => id !== action.payload,
      );
    },
  },
});
