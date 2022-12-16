import {
  Button,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useReducer, useState } from "react"
import { UPDATED_FORM, onInputChange } from "../../utils/form"
import { signIn, signUp } from "../../store/actions"

import { Input } from "../../components"
import colors from "../../constants/themes/colors"
import { styles } from "./styles"
import { useDispatch } from "react-redux"

const initialState = {
  email: { value: "", errorMessage: "", touched: false, hasError: true },
  password: { value: "", errorMessage: "", touched: false, hasError: true },
  isFormatValid: false,
}

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const { name, value, error, errorMessage, touched, isValid } = action.data
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          error,
          errorMessage,
          touched,
        },
        isValid,
      }
    default:
      return state
  }
}

const Auth = () => {
  const dispatch = useDispatch()
  const [formState, dispatchFormState] = useReducer(formReducer, initialState)
  const [isLogin, setIsLogin] = useState(true)
  const title = isLogin ? "Log In" : "Sign Up"
  const message = isLogin
    ? "Don't have an account? Sign Up!"
    : "Already have an account? Log In!"
  const onHandleSubmit = () => {
    dispatch(
      isLogin
        ? signIn(formState.email.value, formState.password.value)
        : signUp(formState.email.value, formState.password.value)
    )
  }
  const onHandleChangeInput = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState)
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
      <View style={styles.formContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputContainer}>
          <Input
            label="Email"
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor={colors.grayDark}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={formState.email.value}
            hasError={formState.email.hasError}
            errorMessage={formState.email.errorMessage}
            touched={formState.email.touched}
            onChangeText={(text) => onHandleChangeInput(text, "email")}
          />
          <Input
            label="Password"
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor={colors.grayDark}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            value={formState.password.value}
            hasError={formState.password.hasError}
            errorMessage={formState.password.errorMessage}
            touched={formState.password.touched}
            onChangeText={(text) => onHandleChangeInput(text, "password")}
          />
        </View>
        <Button
          title={title}
          color={colors.secundary}
          onPress={onHandleSubmit}
          disabled={!formState.isValid}
        />
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.alreadyAccount}>{message}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Auth
