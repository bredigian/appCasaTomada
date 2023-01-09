import { User } from "../screens"
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
          title: "Users",
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

export default UserNavigator
