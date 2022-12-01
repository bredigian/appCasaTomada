import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  productImg: {
    width: 120,
    height: 120,
  },
  productDetails: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  productName: {
    fontSize: 16,
    fontFamily: "LatoRegular",
    color: colors.secundary,
  },
  productPrice: {
    fontSize: 20,
    fontFamily: "LatoBold",
    color: colors.secundary,
    marginVertical: 10,
  },
  productQuantity: {
    fontSize: 14,
    fontFamily: "LatoItalic",
    color: colors.secundary,
  },
})
