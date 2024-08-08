// Import your reducers here
import { combineReducers } from 'redux';
import userReducer from './slices/auth/userSlice';
import productsReducer from './slices/products/slice';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
});

export default rootReducer;
