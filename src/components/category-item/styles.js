import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    height: 180,
    alignItems: "center",
    margin: 20,
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
  categoryImage: {
    width: 70,
    height: 70,
    tintColor: colors.secundary,
  },
  categoryName: {
    fontFamily: "UrbanistBold",
    color: colors.white,
    fontSize: 30,
    backgroundColor: colors.blackTransparent,
    width: "100%",
    height: "100%",
    textAlign: "right",
    textAlignVertical: "bottom",
    paddingRight: 20,
    paddingBottom: 20,
    borderRadius: 10,
  },
})
