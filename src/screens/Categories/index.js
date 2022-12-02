import { Button, FlatList, Text, View } from "react-native"

import { CATEGORIES } from "../../constants/data/categories"
import COLORS from "../../constants/themes/colors"
import { CategoryItem } from "../../components"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"

const Categories = ({ navigation, route }) => {
  const onSelected = (item) => {
    navigation.navigate("Products", { categoryId: item.id, title: item.name })
  }
  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  )
  return (
    // <SafeAreaView style={styles.container}>
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      styles={styles.container}
    />
  )
}

export default Categories
