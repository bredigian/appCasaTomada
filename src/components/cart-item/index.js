import { Image, Text, TouchableOpacity, View } from "react-native"

import { MaterialCommunityIcons } from "@expo/vector-icons"
import React from "react"
import colors from "../../constants/themes/colors"
import { styles } from "./styles"

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={item.img}
          style={styles.productImg}
          resizeMode="center"
        />
      </View>
      <View style={styles.productDetailsContainer}>
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>
            {item.quantity}x ${item.price}
          </Text>
          <Text style={styles.productTotalPrice}>
            ${item.quantity * item.price}
          </Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <MaterialCommunityIcons
            name="delete"
            size={30}
            color={colors.secundary}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItem
