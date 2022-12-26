import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  confirmTotal: {
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
    fontSize: 18,
    width: 160,
    textAlign: "center",
  },
  cartEmpty: {
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
