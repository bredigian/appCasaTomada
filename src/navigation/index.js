import React, { useState } from "react"

import AuthNavigator from "./auth"
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./tabs"
import { useSelector } from "react-redux"

const AppNavigator = () => {
  const userId = useSelector((state) => state.auth.userId)
  return (
    <NavigationContainer>
      {userId ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default AppNavigator
