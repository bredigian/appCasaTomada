import { ScrollView, Text, View } from "react-native"

import React from "react"
import { SettingsItem } from "../../components"
import { styles } from "./styles"

const Settings = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SettingsItem title="Change address" />
        <SettingsItem title="Change name" />
      </ScrollView>
    </View>
  )
}

export default Settings
