import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import Tabs from "./tabs"

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default AppNavigator
