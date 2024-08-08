import { createSlice } from '@reduxjs/toolkit';

interface UserInfo {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  userInfo: UserInfo | null;
  favoriteProductsIds: string[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  userInfo: null,
  favoriteProductsIds: [],
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // setUserInfo: (state, action: PayloadAction<UserInfo>) => {
    //   state.userInfo = action.payload;
    // },
    // clearUserInfo: (state) => {
    //   state.userInfo = null;
    //   state.favoriteProductsIds = [];
    // },
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

export const {
  // setUserInfo,
  // clearUserInfo,
  addFavoriteListing,
  removeFavoriteListing,
} = userSlice.actions;

export default userSlice.reducer;
