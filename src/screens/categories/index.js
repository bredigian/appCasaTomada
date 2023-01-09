import { CategoryItem, Loading } from "../../components"
import React, { useEffect, useState } from "react"
import { fetchCategories, selectCategory } from "../../store/actions"
import { useDispatch, useSelector } from "react-redux"

import { FlatList } from "react-native"
import { styles } from "./styles"

const Categories = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories.categories)

  useEffect(() => {
    dispatch(fetchCategories())
    setTimeout(() => {
      setLoading(true)
    }, 2000)
  }, [dispatch])

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
