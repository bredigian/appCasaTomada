import React, { useEffect } from "react"
import { deleteOrder, getOrders } from "../../store/actions"
import { useDispatch, useSelector } from "react-redux"

import { FlatList } from "react-native"
import OrderItem from "../../components/order-item"
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
    <FlatList
      data={orders}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default Orders
