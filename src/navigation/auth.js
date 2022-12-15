import { Auth } from "../screens"
import colors from "../constants/themes/colors"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
        statusBarColor: colors.gray,
        statusBarStyle: "dark",
      }}
    >
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
