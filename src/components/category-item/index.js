import { ImageBackground, Text, TouchableOpacity } from "react-native"

import React from "react"
import { styles } from "./styles"

const CategoryItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      style={styles.categoryContainer}
      onPress={() => onSelected(item)}
    >
      <ImageBackground
        source={item.img}
        style={styles.backgroundImg}
        resizeMode="center"
      >
        <Text style={styles.categoryName}>{item.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default CategoryItem
