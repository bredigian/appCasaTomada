import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  input: {
    marginVertical: 2.5,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayDark,
    paddingBottom: 2.5,
    fontFamily: "UrbanistRegular",
    fontSize: 15,
  },
  errorMessageContainer: {
    marginVertical: 5,
  },
  error: {
    color: colors.error,
    fontSize: 12,
    fontFamily: "UrbanistRegular",
  },
})
