import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  confirmTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
    padding: 20,
    backgroundColor: colors.white,
    borderColor: colors.secundary,
    borderWidth: 2,
    borderRadius: 10,
  },
  checkout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  totalText: {
    fontFamily: "UrbanistBold",
    color: colors.secundary,
    fontSize: 24,
    textAlign: "center",
  },
  confirmText: {
    fontFamily: "UrbanistBold",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    color: colors.white,
  },
  cartEmpty: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textEmpty: {
    fontFamily: "UrbanistItalic",
    color: colors.secundary,
    fontSize: 22,
    marginVertical: 60,
  },
  goToShop: {
    backgroundColor: colors.secundary,
    padding: 10,
    borderRadius: 10,
  },
  goToShopText: {
    color: colors.white,
    fontSize: 24,
    fontFamily: "UrbanistBold",
  },
})
