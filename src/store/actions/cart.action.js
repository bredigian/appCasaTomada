import { URL_BASE } from "../../constants/firebase"
import { cartTypes } from "../types"

const { ADD_TO_CART, CONFIRM_CART, REMOVE_FROM_CART } = cartTypes

export const addToCart = (product, quantity) => ({
  type: ADD_TO_CART,
  item: product,
  quantity: quantity,
})

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id: id,
})

export const confirmCart = (items, total) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/orders.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items,
          total,
        }),
      })
      const result = await response.json()
      dispatch({
        type: CONFIRM_CART,
        result,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
