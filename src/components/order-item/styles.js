import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
    padding: 20,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderRadius: 10,
  },
  orderDetails: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  orderDate: {
    fontFamily: "UrbanistItalic",
    fontSize: 16,
    color: colors.secundary,
    marginBottom: 5,
  },
  orderValue: {
    fontFamily: "UrbanistBold",
    color: colors.secundary,
    fontSize: 20,
    marginTop: 5,
  },
})
