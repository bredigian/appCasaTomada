import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: "UrbanistBold",
    marginVertical: 5,
    color: colors.secundary,
  },
  subLabel: {
    fontSize: 12,
    fontFamily: "UrbanistRegular",
    marginVertical: 5,
    color: colors.primary,
  },
})
