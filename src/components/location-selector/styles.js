import { StyleSheet } from "react-native"
import colors from "../../constants/themes/colors"
export const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
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
  preview: {
    width: "100%",
    height: 150,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.secundary,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
})
