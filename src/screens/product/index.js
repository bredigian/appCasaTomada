import { Image, ScrollView, Text, View } from "react-native"

import { PRODUCTS } from "../../constants/data/products"
import ProductItem from "../../components/product-item"
import React from "react"
import { styles } from "./styles"

const Product = ({ navigation, route }) => {
  const { productId } = route.params
  const productFiltered = PRODUCTS.find((product) => product.id === productId)
  const { img, name, quantity, price } = productFiltered || {}
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
