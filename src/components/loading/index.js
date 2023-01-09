import { ActivityIndicator } from "react-native"
import React from "react"
import colors from "../../constants/themes/colors"
import { styles } from "./styles"
const Loading = ({ color }) => {
  return (
    <ActivityIndicator
      style={styles.container}
      size="large"
      color={color || colors.primary}
    />
  )
}

export default Loading
