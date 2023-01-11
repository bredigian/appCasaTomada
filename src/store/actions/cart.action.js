import {
  clearItems,
  getItems,
  insertItemCart,
  removeItem,
  updateItemCart,
} from "../../db"

import { URL_BASE } from "../../constants/firebase"
import { URL_GEOCODING } from "../../constants/maps"
import { cartTypes } from "../types"

const { ADD_TO_CART, CONFIRM_CART, REMOVE_FROM_CART, GET_CART, CLEAR_CART } =
  cartTypes

export const loadCart = () => {
  return async (dispatch) => {
    try {
      const result = await getItems()
      dispatch({
        type: GET_CART,
        items: result?.rows?._array,
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export const addToCart = (product, quantity) => {
  return async (dispatch) => {
    try {
      try {
        const result = await insertItemCart(
          product.id,
          product.name,
          quantity,
          product.price,
          product.price * quantity,
          product.img
        )
        console.log(result)
        dispatch({
          type: ADD_TO_CART,
          id: result.insertId,
          item: product,
          quantity: quantity,
        })
      } catch {
        const result = await updateItemCart(
          product.id,
          quantity,
          product.price * quantity
        )
        console.log(result)
        dispatch({
          type: ADD_TO_CART,
          id: result.insertId,
          item: product,
          quantity: quantity,
        })
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const removeFromCart = (id) => {
  return async (dispatch) => {
    try {
      await removeItem(id)
      dispatch({
        type: REMOVE_FROM_CART,
        id: id,
      })
    } catch (error) {
      console.error(error)
    }
  }
}

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

export const clearCart = () => {
  return async (dispatch) => {
    try {
      const result = await clearItems()
      dispatch({
        type: CLEAR_CART,
        result,
      })
    } catch (error) {
      console.error(error)
    }
  }
}
