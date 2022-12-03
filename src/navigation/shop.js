import { Categories, Product, Products } from "../screens"

import { Header } from "../components"
import React from "react"
import colors from "../constants/themes/colors"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "UrbanistBold",
          color: colors.secundary,
          fontSize: 16,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: () => <Header />,
        }}
        component={Categories}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  )
}

export default ShopNavigator
