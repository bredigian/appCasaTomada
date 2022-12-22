import { Image, SafeAreaView, Text, View } from "react-native"

import React from "react"
import { styles } from "./styles"

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.headerLogo}
          source={require("../../../assets/img/logo/logoCasatomada.png")}
        />
      </View>
    </SafeAreaView>
  )
}

export default Header
