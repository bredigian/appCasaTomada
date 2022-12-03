import { FlatList, Text, View } from "react-native"

import { ORDERS } from "../../constants/data/orders"
import OrderItem from "../../components/order-item"
import React from "react"
import { styles } from "./styles"

const Orders = ({ navigation }) => {
  const onDelete = (item) => {
    console.warn("Delete order ", item.id)
  }
  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />
  return (
    <FlatList
      data={ORDERS}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default Orders
