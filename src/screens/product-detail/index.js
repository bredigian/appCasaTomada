import { Button, Image, Text, View } from "react-native"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { QuantityIncrementator } from "../../components"
import { addToCart } from "../../store/actions/cart.action"
import colors from "../../constants/themes/colors"
import { styles } from "./styles"

const Product = () => {
  const [itemQuantity, setItemQuantity] = useState(1)
  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.selected)
  const { img, name, quantity, price } = product || {}
  const onDecrement = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1)
    }
  }
  const onIncrement = () => {
    if (itemQuantity < quantity) {
      setItemQuantity(itemQuantity + 1)
    }
  }
  const onAddToCart = () => {
    dispatch(addToCart(product, itemQuantity))
  }
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: img }}
          style={styles.productImg}
          resizeMode="center"
        />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>${price}</Text>
        <Text style={styles.productQuantity}>Stock: {quantity}</Text>
      </View>
      <QuantityIncrementator
        initial={itemQuantity}
        stock={quantity}
        counter={itemQuantity}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
      <Button
        title="Add to cart"
        color={colors.primary}
        onPress={onAddToCart}
      />
    </View>
  )
}

export default Product
