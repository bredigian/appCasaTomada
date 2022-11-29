import { Image, Text, View } from "react-native"

import React from "react"
import styles from "./styles"

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.headerLogo}
        source={require("../../../assets/img/logoCasatomada.png")}
      />
    </View>
  )
}

export default Header
