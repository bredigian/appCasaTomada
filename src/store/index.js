import { applyMiddleware, combineReducers, createStore } from "redux"
import {
  authReducer,
  cartReducer,
  categoryReducer,
  ordersReducer,
  productsReducer,
} from "./reducers"

import thunk from "redux-thunk"

const RootReducer = combineReducers({
  products: productsReducer,
  categories: categoryReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))
