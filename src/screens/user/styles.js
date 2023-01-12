import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 100,
    padding: 5,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  editImage: {
    backgroundColor: colors.primary,
    width: 20,
    height: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    transform: [
      {
        translateY: -12,
      },
    ],
  },
  userData: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 18,
    fontFamily: "UrbanistBold",
  },
  email: {
    fontFamily: "UrbanistItalic",
    fontSize: 14,
  },
  options: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 60,
  },
  option: {
    marginVertical: 10,
  },
  optionText: {
    fontSize: 20,
    fontFamily: "UrbanistBold",
  },
  optionTextLogOut: {
    color: colors.primary,
  },
})
