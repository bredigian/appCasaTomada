import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"

import CartNavigator from "./cart"
import React from "react"
import ShopNavigator from "./shop"
import UserNavigator from "./user"
import colors from "../constants/themes/colors"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useSelector } from "react-redux"

const BottomTabs = createBottomTabNavigator()

const TabNavigator = () => {
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <BottomTabs.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "UrbanistRegular",
          fontSize: 12,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
        },
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "shopping" : "shopping-outline"}
              size={24}
              color={colors.primary}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "cart" : "cart-outline"}
              size={24}
              color={colors.primary}
            />
          ),
          tabBarBadge: cartItems.length > 0 ? cartItems.length : null,
          tabBarBadgeStyle: {
            fontFamily: "UrbanistItalic",
            fontSize: 12,
            color: colors.white,
          },
        }}
      />
      <BottomTabs.Screen
        name="UserTab"
        component={UserNavigator}
        options={{
          title: "User",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={focused ? "user" : "user-o"}
              size={24}
              color={colors.primary}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default TabNavigator
