import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secundary,
    margin: 20,
    height: 100,
    borderRadius: 10,
  },
  categoryName: {
    fontFamily: "LatoBold",
    color: "white",
    fontSize: 18,
  },
})
