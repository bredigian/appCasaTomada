import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    height: 160,
    alignItems: "center",
    margin: 20,
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  categoryImage: {
    width: 70,
    height: 70,
    tintColor: colors.secundary,
  },
  categoryName: {
    fontFamily: "UrbanistBold",
    color: colors.secundary,
    fontSize: 30,
  },
})
