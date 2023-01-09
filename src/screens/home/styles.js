import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  title: {
    fontSize: 40,
    fontFamily: "UrbanistBold",
  },
  logo: {
    width: 250,
    height: 250,
    marginVertical: 75,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "75%",
  },
  option: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 10,
    width: 125,
  },
  optionText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "UrbanistBold",
    textAlign: "center",
  },
})
