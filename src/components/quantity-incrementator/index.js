import React, { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"

const QuantityIncrementator = ({ initial, stock }) => {
  const [quantity, setQuantity] = useState(initial)
  const onDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const onIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonIncDec} onPress={onDecrement}>
        <Text style={styles.incDec}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>{quantity}</Text>
      <TouchableOpacity style={styles.buttonIncDec} onPress={onIncrement}>
        <Text style={styles.incDec}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default QuantityIncrementator
