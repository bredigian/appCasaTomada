import { Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import LocationSelector from "../../components/location-selector"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import React from "react"
import { styles } from "./styles"

const AdressLocation = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.items)
  const total = useSelector((state) => state.cart.total)
  return (
    <View style={styles.container}>
      <LocationSelector />
      <TouchableOpacity style={styles.checkout} onPress={() => {}}>
        <Text style={styles.confirmButton}>Total ${total}</Text>
        <MaterialCommunityIcons name="check-circle" size={50} color="green" />
      </TouchableOpacity>
    </View>
  )
}

export default AdressLocation
