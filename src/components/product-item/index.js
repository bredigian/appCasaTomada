import { Image, Text, TouchableOpacity, View } from "react-native"

import React from "react"
import { styles } from "./styles"

const ProductItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
      <View>
        <Image
          source={{ uri: item.img }}
          style={styles.productImg}
          resizeMode="center"
        />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productQuantity}>Stock: {item.quantity}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ProductItem
