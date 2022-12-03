import { Cart } from "../screens"
import React from "react"
import colors from "../constants/themes/colors"
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
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            fontFamily: "UrbanistBold",
            color: colors.white,
          },
          statusBarColor: colors.primary,
        }}
      />
    </Stack.Navigator>
  )
}

export default CartNavigator
