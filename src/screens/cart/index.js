import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { CartItem } from "../../components"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import React from "react"
import colors from "../../constants/themes/colors"
import { removeFromCart } from "../../store/actions"
import { styles } from "./styles"

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const onDelete = (id) => {
    dispatch(removeFromCart(id))
  }
  const onSelectLocation = () => {
    navigation.navigate("LocationSelector")
  }
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
            size={100}
            color={colors.secundary}
          />
          <Text style={styles.textEmpty}>Your cart is empty!</Text>
        </View>
      )}
      {cart.length > 0 && (
        <View style={styles.confirmTotal}>
          <TouchableOpacity style={styles.checkout} onPress={onSelectLocation}>
            <Text style={styles.totalText}>
              Select your location and checkout
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Cart
