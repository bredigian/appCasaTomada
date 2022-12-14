import CartNavigator from "./cart"
import { Header } from "../components"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import OrdersNavigator from "./orders"
import React from "react"
import ShopNavigator from "./shop"
import colors from "../constants/themes/colors"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useSelector } from "react-redux"

const BottomTabs = createBottomTabNavigator()

const Tabs = () => {
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
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          title: "Orders",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "clipboard-list" : "clipboard-list-outline"}
              size={24}
              color={colors.primary}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default Tabs
