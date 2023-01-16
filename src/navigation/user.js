import { Address, User } from "../screens"

import colors from "../constants/themes/colors"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const UserNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Users">
      <Stack.Screen
        name="User"
        component={User}
        options={{
          title: "Account",
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
      <Stack.Screen
        name="Address"
        component={Address}
        options={{
          title: "Address",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "UrbanistBold",
            color: colors.white,
          },
          headerStyle: {
            backgroundColor: colors.primary,
          },
          statusBarColor: colors.primary,
          headerTintColor: colors.white,
        }}
      />
    </Stack.Navigator>
  )
}

export default UserNavigator
