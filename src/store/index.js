import { CategoryReducer, ProductsReducer } from "./reducers"
import { combineReducers, createStore } from "redux"

const RootReducer = combineReducers({
  products: ProductsReducer,
  categories: CategoryReducer,
})

export default createStore(RootReducer)
