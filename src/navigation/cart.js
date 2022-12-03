import { Cart } from "../screens"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Cart",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "UrbanistBold",
          },
        }}
      />
    </Stack.Navigator>
  )
}

export default CartNavigator
