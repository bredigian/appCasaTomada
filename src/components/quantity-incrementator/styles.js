import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonIncDec: {
    width: 50,
    height: 50,
    backgroundColor: colors.secundary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  incDec: {
    fontSize: 30,
    fontFamily: "UrbanistRegular",
    color: colors.white,
  },
  counter: {
    width: 40,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 24,
    fontFamily: "UrbanistRegular",
    marginHorizontal: 20,
  },
})
