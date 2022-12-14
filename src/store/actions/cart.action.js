import { cartTypes } from "../types"

const { ADD_TO_CART, CONFIRM_CART, REMOVE_FROM_CART } = cartTypes

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  item: product,
})

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id: id,
})

export const confirmCart = (order) => ({
  type: CONFIRM_CART,
  order: order,
})
