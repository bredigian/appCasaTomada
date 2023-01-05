import { collection, getDocs } from "@firebase/firestore"

import { database } from "../../config/firebase/index"
import { productsTypes } from "../types"

const { FILTER_PRODUCTS, SELECT_PRODUCTS, GET_PRODUCTS } = productsTypes

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const productsCollection = collection(database, "products")
      const productsSnapshot = await getDocs(productsCollection)
      if (productsSnapshot.empty) {
        throw new Error("No products found")
      }
      const products = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      dispatch({
        type: GET_PRODUCTS,
        products,
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export const selectProduct = (id) => ({
  type: SELECT_PRODUCTS,
  productId: id,
})

export const filterProducts = (id) => ({
  type: FILTER_PRODUCTS,
  categoryId: id,
})
