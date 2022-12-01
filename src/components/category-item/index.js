import { Image, Text, TouchableOpacity, View } from "react-native"

import React from "react"
import { styles } from "./styles"

const CategoryItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      style={styles.categoryContainer}
      onPress={() => onSelected(item)}
    >
      <View>
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryItem
