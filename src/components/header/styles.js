import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export default StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
  },
  headerLogo: {
    width: 60,
    height: 60,
  },
})
