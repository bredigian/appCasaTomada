import { Cart } from "../screens"
import React from "react"
import colors from "../constants/themes/colors"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          fontFamily: "UrbanistBold",
          color: colors.white,
        },
        headerTintColor: colors.white,
        statusBarColor: colors.primary,
      }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )
}

export default CartNavigator
