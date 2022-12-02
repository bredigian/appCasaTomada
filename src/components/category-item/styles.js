import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    height: 160,
    alignItems: "center",
    margin: 20,
    justifyContent: "space-evenly",
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryImage: {
    width: 70,
    height: 70,
    tintColor: colors.secundary,
  },
  categoryName: {
    fontFamily: "LatoBold",
    color: colors.secundary,
    fontSize: 18,
  },
})
