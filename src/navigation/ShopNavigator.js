import { Categories, ProductCategory, ProductDetail } from "../screens"

import { Header } from "../components"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import colors from "../constants/themes/colors"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: "Casa Tomada",
          }}
          component={Categories}
        />
        <Stack.Screen name="Category" component={ProductCategory} />
        <Stack.Screen name="Detail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator
