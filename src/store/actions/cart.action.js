import { URL_BASE } from "../../constants/firebase"
import { URL_GEOCODING } from "../../constants/maps"
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

export const confirmCart = (items, total, coords) => {
  return async (dispatch) => {
    try {
      const responseCoords = await fetch(URL_GEOCODING(coords.lat, coords.lng))
      if (!responseCoords.ok) {
        throw new Error("Something went wrong with Geocoding")
      }
      const dataCoords = await responseCoords.json()
      if (!dataCoords.results) {
        throw new Error("Address not found")
      }
      const address = dataCoords.results[0].formatted_address
      const response = await fetch(`${URL_BASE}/orders.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items,
          total,
          address,
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
