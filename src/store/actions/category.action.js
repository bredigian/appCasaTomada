import { categoryTypes } from "../types/category.types"

export const selectCategory = (id) => ({
  type: categoryTypes.SELECT_CATEGORY,
  categoryId: id,
})
