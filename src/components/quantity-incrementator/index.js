import React, { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"

const QuantityIncrementator = ({ counter, onIncrement, onDecrement }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonIncDec} onPress={onDecrement}>
        <Text style={styles.incDec}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>{counter}</Text>
      <TouchableOpacity style={styles.buttonIncDec} onPress={onIncrement}>
        <Text style={styles.incDec}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default QuantityIncrementator
