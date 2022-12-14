import { applyMiddleware, combineReducers, createStore } from "redux"
import { cartReducer, categoryReducer, productsReducer } from "./reducers"

import thunk from "redux-thunk"

const RootReducer = combineReducers({
  products: productsReducer,
  categories: categoryReducer,
  cart: cartReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))
