import { Orders } from "../screens"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Orders">
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default OrdersNavigator
