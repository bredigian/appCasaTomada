import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 50,
  },
  formContainer: {
    alignItems: "center",
    width: "65%",
  },
  title: {
    fontSize: 26,
    fontFamily: "UrbanistBold",
  },
  inputContainer: {
    width: "100%",
    marginVertical: 20,
  },
  label: {
    marginVertical: 2.5,
    fontFamily: "UrbanistBold",
    fontSize: 16,
  },
  input: {
    marginVertical: 2.5,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayDark,
    paddingBottom: 2.5,
    fontFamily: "UrbanistRegular",
    fontSize: 15,
  },
  alreadyAccount: {
    marginVertical: 20,
    color: colors.primary,
    fontFamily: "UrbanistItalic",
    fontSize: 16,
  },
})
