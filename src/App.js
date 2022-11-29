import { ActivityIndicator, StyleSheet, View } from "react-native"

import ShopNavigator from "./navigation/ShopNavigator"
import colors from "./constants/themes/colors"
import { useFonts } from "expo-font"

export default function App() {
  const [loaded] = useFonts({
    LatoRegular: require("../assets/fonts/Lato-Regular.ttf"),
    LatoBold: require("../assets/fonts/Lato-Bold.ttf"),
    LatoItalic: require("../assets/fonts/Lato-Italic.ttf"),
  })
  if (!loaded) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={"large"} color={colors.secundary} />
      </View>
    )
  } else {
    return <ShopNavigator />
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
