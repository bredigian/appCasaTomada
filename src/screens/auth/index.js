import {
  Button,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useState } from "react"

import colors from "../../constants/themes/colors"
import { styles } from "./styles"

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const title = isLogin ? "Log In" : "Sign Up"
  const message = isLogin
    ? "Don't have an account? Sign Up!"
    : "Already have an account? Log In!"
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View>
        <Image
          source={require("../../../assets/img/logo/logoCasatomada.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor={colors.grayDark}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor={colors.grayDark}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={() => {}}
          />
        </View>
        <Button title={title} color={colors.secundary} onPress={() => {}} />
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.alreadyAccount}>{message}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Auth
