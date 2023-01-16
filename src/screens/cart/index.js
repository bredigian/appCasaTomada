import { FlatList, Text, TouchableOpacity, View } from "react-native"
import React, { useEffect } from "react"
import {
  clearCart,
  confirmCart,
  loadCart,
  removeFromCart,
} from "../../store/actions"
import { useDispatch, useSelector } from "react-redux"

import { CartItem } from "../../components"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../../constants/themes/colors"
import { styles } from "./styles"

const Cart = ({ navigation }) => {
  const userData = useSelector(
    (state) => state.auth?.userData[0] || state.auth?.userData
  )
  const cart = useSelector((state) => state.cart.items)
  const total = useSelector((state) => state.cart.total)
  const dispatch = useDispatch()
  const onDelete = (id) => {
    dispatch(removeFromCart(id))
  }
  const onConfirmCart = () => {
    dispatch(confirmCart(cart, total, userData))
    dispatch(clearCart())
  }
  useEffect(() => {
    dispatch(loadCart())
  }, [dispatch])
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />
  return (
    <View style={styles.container}>
      {cart.length !== 0 ? (
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.cartEmpty}>
          <MaterialCommunityIcons
            name="cart-off"
            size={68}
            color={colors.secundary}
          />
          <Text style={styles.textEmpty}>Your cart is empty!</Text>
          <TouchableOpacity
            style={styles.goToShop}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.goToShopText}>Go to shop</Text>
          </TouchableOpacity>
        </View>
      )}
      {cart.length > 0 && (
        <View style={styles.confirmTotal}>
          <TouchableOpacity style={styles.checkout} onPress={onConfirmCart}>
            <Text style={styles.totalText}>Confirm order</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Cart
