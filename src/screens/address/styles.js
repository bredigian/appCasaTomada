import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: "80%",
    alignSelf: "center",
  },
  getLocation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  getLocationText: {
    fontSize: 16,
    color: colors.secundary,
    fontFamily: "UrbanistRegular",
  },
  confirm: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  confirmButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
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
  confirmText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "UrbanistBold",
  },
})
