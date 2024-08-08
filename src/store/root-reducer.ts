// Import your reducers here
import { combineReducers } from 'redux'
import productsReducer from './slices/products/slice'

const rootReducer = combineReducers({
  // Add your reducers here
  products: productsReducer
})

export default rootReducer
