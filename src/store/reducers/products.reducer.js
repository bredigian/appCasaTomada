import { PRODUCTS } from "../../constants/data"
import { productsTypes } from "../types"

const { FILTER_PRODUCTS, SELECT_PRODUCTS } = productsTypes

const initialState = {
  products: PRODUCTS,
  filteredProduct: [],
  selected: null,
}

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) => product.cateogoryId === action.categoryId
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

export default ProductsReducer
