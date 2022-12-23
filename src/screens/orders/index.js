import { FlatList, Text, View } from "react-native"
import React, { useEffect } from "react"
import { deleteOrder, getOrders } from "../../store/actions"
import { useDispatch, useSelector } from "react-redux"

import { MaterialCommunityIcons } from "@expo/vector-icons"
import OrderItem from "../../components/order-item"
import colors from "../../constants/themes/colors"
import { styles } from "../orders/styles"
import { useCallback } from "react"
import { useFocusEffect } from "@react-navigation/native"

const Orders = ({ navigation }) => {
  const orders = useSelector((state) => state.orders.orders)
  const dispatch = useDispatch()
  const onDelete = (id) => {
    dispatch(deleteOrder(id))
  }
  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders())
    }, [dispatch])
  )
  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />
  return (
    <View style={styles.container}>
      {orders.length !== 0 ? (
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View style={styles.ordersEmpty}>
          <MaterialCommunityIcons
            name="clipboard-alert-outline"
            size={100}
            color={colors.secundary}
          />
          <Text style={styles.textEmpty}>There are no orders</Text>
        </View>
      )}
    </View>
  )
}

export default Orders
