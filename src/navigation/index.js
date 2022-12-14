import React, { useState } from "react"

import AuthNavigator from "./auth"
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./tabs"

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default AppNavigator
