import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: colors.white,
    borderColor: colors.secundary,
    borderWidth: 2,
    borderRadius: 10,
  },
  confirmButton: {
    fontSize: 25,
    fontFamily: "UrbanistBold",
  },
})
