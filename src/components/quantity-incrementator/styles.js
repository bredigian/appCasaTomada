import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.secundary,
    borderRadius: 10,
    padding: 5,
  },
  incDec: {
    fontSize: 30,
    fontFamily: "UrbanistRegular",
    color: colors.secundary,
    textAlign: "center",
    textAlignVertical: "center",
  },
  buttonIncDec: {
    width: 40,
    height: 40,
  },
  counter: {
    width: 40,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontFamily: "UrbanistRegular",
    marginHorizontal: 20,
    color: colors.secundary,
  },
})
