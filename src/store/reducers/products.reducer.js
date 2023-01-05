import { PRODUCTS } from "../../constants/data"
import { productsTypes } from "../types"

const { FILTER_PRODUCTS, SELECT_PRODUCTS, GET_PRODUCTS } = productsTypes

const initialState = {
  products: [],
  filteredProduct: [],
  selected: null,
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      }
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) => product.categoryId === action.categoryId
        ),
      }
    case SELECT_PRODUCTS:
      return {
        ...state,
        selected: state.products.find(
          (product) => product.id === action.productId
        ),
      }
    default:
      return state
  }
}

export default productsReducer
