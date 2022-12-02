import { Image, Text, View } from "react-native"

import React from "react"
import { styles } from "./styles"

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.headerLogo}
        source={require("../../../assets/img/logo/logoCasatomada.png")}
      />
    </View>
  )
}

export default Header
