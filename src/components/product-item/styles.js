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
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    backgroundColor: colors.white,
    borderRadius: 10,
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
    fontFamily: "UrbanistRegular",
    color: colors.secundary,
    textAlign: "right",
  },
  productPrice: {
    fontSize: 20,
    fontFamily: "UrbanistBold",
    color: colors.secundary,
    marginVertical: 10,
  },
  productQuantity: {
    fontSize: 14,
    fontFamily: "UrbanistItalic",
    color: colors.secundary,
  },
})
