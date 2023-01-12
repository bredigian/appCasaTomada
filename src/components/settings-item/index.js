import { Text, TouchableOpacity } from "react-native"

import React from "react"
import { styles } from "./styles"

const SettingsItem = ({ title, icon }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SettingsItem
