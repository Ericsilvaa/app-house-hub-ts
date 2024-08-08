import api from '@/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

type Product = {
  products: any[];
  error: string | null;
  status: StatusType;
};

const initialState: Product = {
  products: [],
  error: null,
  status: 'idle',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // add products
    addProducts(state, action) {
      if (state.products.length === 0) {
        state.products = action.payload;
        return;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        if (axios.isCancel(action.payload)) {
          return;
        }

        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (options: any) => {
    const response = await api.get('/products', options);
    return response.data;
  },
);

export const { addProducts } = productsSlice.actions;

export default productsSlice.reducer;
