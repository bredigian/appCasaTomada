import { Button, Image, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import React from "react"
import { addToCart } from "../../store/actions/cart.action"
import colors from "../../constants/themes/colors"
import { styles } from "./styles"

const Product = () => {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.selected)
  const { img, name, quantity, price } = product || {}
  const onAddToCart = () => {
    dispatch(addToCart(product))
  }
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
      <Button
        title="Add to cart"
        color={colors.primary}
        onPress={onAddToCart}
      />
    </View>
  )
}

export default Product
