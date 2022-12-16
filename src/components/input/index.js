import { Text, TextInput, View } from "react-native"

import Label from "../../components/label"
import React from "react"
import { styles } from "./styles"

const Input = ({
  editable,
  children,
  value,
  onChangeText,
  onFocus,
  onBlur,
  maxLength,
  placeholder,
  placeholderTextColor,
  keyboardType,
  secureTextEntry,
  hasError,
  errorMessage,
  touched,
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Label {...props}>
        <TextInput
          {...props}
          style={{ ...styles.input, ...style }}
          editable={editable}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      </Label>
      {hasError && touched ? (
        <View style={styles.errorMessageContainer}>
          <Text style={styles.error}>{errorMessage}</Text>
        </View>
      ) : null}
    </View>
  )
}

export default Input
