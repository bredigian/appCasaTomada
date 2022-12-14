import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { confirmCart, removeFromCart } from "../../store/actions"
import { useDispatch, useSelector } from "react-redux"

import { CartItem } from "../../components"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import React from "react"
import { styles } from "./styles"

const Cart = () => {
  const cart = useSelector((state) => state.cart.items)
  const total = useSelector((state) => state.cart.total)
  const dispatch = useDispatch()
  const onDelete = (id) => {
    dispatch(removeFromCart(id))
  }
  const onConfirmCart = () => {
    dispatch(confirmCart(cart, total))
  }
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {cart.length > 0 && (
        <View style={styles.confirmTotal}>
          <TouchableOpacity style={styles.checkout} onPress={onConfirmCart}>
            <Text style={styles.totalText}>Total ${total}</Text>
            <MaterialCommunityIcons
              name="check-circle"
              size={50}
              color="green"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Cart
