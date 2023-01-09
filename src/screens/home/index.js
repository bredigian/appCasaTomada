import { Image, Text, TouchableOpacity, View } from "react-native"

import React from "react"
import { styles } from "../home/styles"

const Home = ({ navigation }) => {
  const onSignIn = () => {
    navigation.navigate("Auth", { loginOK: true })
  }
  const onSignUp = () => {
    navigation.navigate("Auth", { loginOK: false })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Image
        source={require("../../../assets/img/logo/logoCasatomada.png")}
        style={styles.logo}
      />
      <View style={styles.options}>
        <TouchableOpacity onPress={onSignIn} style={styles.option}>
          <Text style={styles.optionText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSignUp} style={styles.option}>
          <Text style={styles.optionText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home
