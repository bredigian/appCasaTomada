import { cartTypes } from "../types"
import { sumTotal } from "../../utils/functions"

const { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_CART, GET_CART, CLEAR_CART } =
  cartTypes

const initialState = {
  items: [],
  total: 0,
  loading: false,
  error: null,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        items: action.items,
        total: sumTotal(action.items),
      }
    case ADD_TO_CART:
      let updatedCart = []
      if (state.items.find((item) => item.id === action.item.id)) {
        updatedCart = state.items.map((item) => {
          if (item.id === action.item.id) item.quantity += action.quantity
          return item
        })
      } else {
        const item = { ...action.item, quantity: action.quantity }
        updatedCart = [...state.items, item]
      }
      return {
        ...state,
        items: updatedCart,
        total: sumTotal(updatedCart),
      }
    case REMOVE_FROM_CART:
      const filteredCart = state.items.filter((item) => item.id !== action.id)
      return {
        ...state,
        items: filteredCart,
        total: sumTotal(filteredCart),
      }
    case CONFIRM_CART:
      if (action.result) {
        return {
          ...state,
          items: [],
          total: 0,
        }
      }
      return {
        ...state,
        error: action.error,
      }
    case CLEAR_CART:
      if (action.result) {
        return {
          ...state,
          items: [],
          total: 0,
        }
      }
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

export default cartReducer
