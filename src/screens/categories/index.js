import { ActivityIndicator, FlatList } from "react-native"
import { CategoryItem, Loading } from "../../components"
import React, { useCallback, useState } from "react"
import { fetchCategories, selectCategory } from "../../store/actions"
import { useDispatch, useSelector } from "react-redux"

import colors from "../../constants/themes/colors"
import { styles } from "./styles"
import { useFocusEffect } from "@react-navigation/core"

const Categories = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories.categories)

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchCategories())
      setTimeout(() => {
        setLoading(true)
      }, 1500)
    })
  )

  const onSelected = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate("Products", { title: item.name })
  }
  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  )
  return !loading ? (
    <Loading />
  ) : (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      styles={styles.container}
    />
  )
}

export default Categories
