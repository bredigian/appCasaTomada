import { Text, TouchableOpacity, View } from "react-native"

import { MaterialCommunityIcons } from "@expo/vector-icons"
import React from "react"
import colors from "../../constants/themes/colors"
import { formatDate } from "../../utils/functions/index"
import { styles } from "./styles"

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderDetails}>
        <Text style={styles.orderDate}>{formatDate(item.date)}</Text>
        <Text style={styles.orderValue}>${item.total}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <MaterialCommunityIcons
          name="delete"
          size={40}
          color={colors.primary}
        />
      </TouchableOpacity>
    </View>
  )
}

export default OrderItem
