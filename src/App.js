import { ActivityIndicator, StyleSheet, View } from "react-native"

import AppNavigator from "./navigation/index"
import colors from "./constants/themes/colors"
import { useFonts } from "expo-font"

export default function App() {
  const [loaded] = useFonts({
    UrbanistRegular: require("../assets/fonts/Urbanist-Regular.ttf"),
    UrbanistBold: require("../assets/fonts/Urbanist-Bold.ttf"),
    UrbanistItalic: require("../assets/fonts/Urbanist-Italic.ttf"),
  })
  if (!loaded) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={"large"} color={colors.secundary} />
      </View>
    )
  } else {
    return <AppNavigator />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
