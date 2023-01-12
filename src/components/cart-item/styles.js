import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  productDetailsContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  productDetails: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  productName: {
    maxWidth: 150,
    fontFamily: "UrbanistRegular",
    fontSize: 16,
    color: colors.secundary,
    textAlign: "right",
  },
  productPrice: {
    fontSize: 18,
    fontFamily: "UrbanistItalic",
    color: colors.secundary,
  },
  productTotalPrice: {
    fontFamily: "UrbanistBold",
    fontSize: 20,
    color: colors.white,
    backgroundColor: colors.secundary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
})
