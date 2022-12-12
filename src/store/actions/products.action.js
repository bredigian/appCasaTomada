import { productsTypes } from "../types"

const { FILTER_PRODUCTS, SELECT_PRODUCTS } = productsTypes

export const selectProduct = (id) => ({
  type: SELECT_PRODUCTS,
  productId: id,
})

export const filterProducts = (id) => ({
  type: FILTER_PRODUCTS,
  categoryId: id,
})
