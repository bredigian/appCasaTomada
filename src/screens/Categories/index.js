import { useDispatch, useSelector } from "react-redux"

import COLORS from "../../constants/themes/colors"
import { CategoryItem } from "../../components"
import { FlatList } from "react-native"
import React from "react"
import { selectCategory } from "../../store/actions"
import { styles } from "./styles"

const Categories = ({ navigation }) => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories.categories)
  const onSelected = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate("Products", { title: item.name })
  }
  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  )
  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      styles={styles.container}
    />
  )
}

export default Categories
