import { collection, getDocs } from "@firebase/firestore"

import { categoryTypes } from "../types/category.types"
import { database } from "../../config/firebase"

const { FETCH_CATEGORIES, SELECT_CATEGORY } = categoryTypes
export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const categoriesCollection = collection(database, "categories")
      const categoriesSnapshot = await getDocs(categoriesCollection)
      if (categoriesSnapshot.empty) {
        throw new Error("No categories found")
      }
      const categories = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      dispatch({
        type: FETCH_CATEGORIES,
        categories,
      })
    } catch (error) {
      console.error(error)
    }
  }
}
export const selectCategory = (id) => ({
  type: SELECT_CATEGORY,
  categoryId: id,
})
