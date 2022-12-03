import { FlatList, Text, TouchableOpacity, View } from "react-native"

import { CART } from "../../constants/data/cart"
import { CartItem } from "../../components"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import React from "react"
import { styles } from "./styles"

const Cart = ({ navigation }) => {
  const onDelete = (id) => {
    console.warn("Delete", id)
  }
  const onCheckout = () => {
    console.warn("Checkout OK")
  }
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />
  let totalCart = 0
  CART.forEach((item) => {
    totalCart += item.totalPrice
  })
  return (
    <View style={styles.container}>
      <FlatList
        data={CART}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.confirmTotal}>
        <TouchableOpacity style={styles.checkout} onPress={onCheckout}>
          <Text style={styles.totalText}>Total ${totalCart}</Text>
          <MaterialCommunityIcons name="check-circle" size={50} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart
