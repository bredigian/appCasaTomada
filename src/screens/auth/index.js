import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useState } from "react"
import { signIn, signUp } from "../../store/actions"

import colors from "../../constants/themes/colors"
import { styles } from "./styles"
import { useDispatch } from "react-redux"

const Auth = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)
  const title = isLogin ? "Log In" : "Sign Up"
  const message = isLogin
    ? "Don't have an account? Sign Up!"
    : "Already have an account? Log In!"
  const onHandleSubmit = () => {
    dispatch(isLogin ? signIn(email, password) : signUp(email, password))
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
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
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor={colors.grayDark}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Button
          title={title}
          color={colors.secundary}
          onPress={onHandleSubmit}
          disabled={!email || !password}
        />
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.alreadyAccount}>{message}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Auth
