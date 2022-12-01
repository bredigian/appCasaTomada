import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    height: "100%",
  },
  productDetails: {
    flexDirection: "column",
    alignItems: "center",
  },
  productImg: {
    width: 300,
    height: 300,
  },
  productName: {
    fontFamily: "LatoRegular",
    fontSize: 20,
    color: colors.secundary,
  },
  productPrice: {
    fontFamily: "LatoBold",
    fontSize: 25,
    color: colors.secundary,
    marginVertical: 20,
  },
  productQuantity: {
    fontFamily: "LatoItalic",
    fontSize: 18,
    color: colors.secundary,
  },
})
