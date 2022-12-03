import { Orders } from "../screens"
import React from "react"
import colors from "../constants/themes/colors"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Orders">
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          title: "Orders",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "UrbanistBold",
            color: colors.white,
          },
          headerStyle: {
            backgroundColor: colors.primary,
          },
          statusBarColor: colors.primary,
        }}
      />
    </Stack.Navigator>
  )
}

export default OrdersNavigator
