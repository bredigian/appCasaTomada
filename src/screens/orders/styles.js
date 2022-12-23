import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ordersEmpty: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textEmpty: {
    fontFamily: "UrbanistRegular",
    color: colors.secundary,
    fontSize: 25,
    marginVertical: 40,
  },
})
