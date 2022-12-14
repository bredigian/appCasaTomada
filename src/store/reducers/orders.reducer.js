import { ordersTypes } from "../types"

const { GET_ORDERS, DELETE_ORDER } = ordersTypes

const initialState = {
  orders: [],
}

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      }
    case DELETE_ORDER: {
      const filteredOrders = state.orders.filter(
        (order) => order.id !== action.id
      )
      return {
        ...state,
        orders: filteredOrders,
      }
    }
    default: {
      return state
    }
  }
}

export default ordersReducer
