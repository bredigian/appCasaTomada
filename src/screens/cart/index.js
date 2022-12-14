import { FlatList, Text, TouchableOpacity, View } from "react-native"

import { CartItem } from "../../components"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import React from "react"
import { styles } from "./styles"
import { useSelector } from "react-redux"

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.items)
  const total = useSelector((state) => state.cart.total)
  const onDelete = (id) => {
    console.warn("Delete", id)
  }
  const onCheckout = () => {
    console.warn("Checkout OK")
  }
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.confirmTotal}>
        <TouchableOpacity style={styles.checkout} onPress={onCheckout}>
          <Text style={styles.totalText}>Total ${total}</Text>
          <MaterialCommunityIcons name="check-circle" size={50} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart
