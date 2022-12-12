import { Image, Text, View } from "react-native"

import React from "react"
import { styles } from "./styles"
import { useSelector } from "react-redux"

const Product = () => {
  const product = useSelector((state) => state.products.selected)
  const { img, name, quantity, price } = product || {}
  return (
    <View style={styles.container}>
      <View>
        <Image source={img} style={styles.productImg} resizeMode="center" />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>${price}</Text>
        <Text style={styles.productQuantity}>Stock: {quantity}</Text>
      </View>
    </View>
  )
}

export default Product
