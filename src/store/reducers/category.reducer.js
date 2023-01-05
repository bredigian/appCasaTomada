import { categoryTypes } from "../types"

const { SELECT_CATEGORY, FETCH_CATEGORIES } = categoryTypes
const initialState = {
  categories: [],
  selected: null,
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      }
    case SELECT_CATEGORY:
      const indexCategory = state.categories.findIndex(
        (category) => category.id === action.categoryId
      )
      if (indexCategory === -1) {
        return state
      }
      return {
        ...state,
        selected: state.categories[indexCategory],
      }
    default:
      return state
  }
}

export default categoryReducer
