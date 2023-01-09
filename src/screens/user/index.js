import { Image, Text, TouchableOpacity, View } from "react-native"

import React from "react"
import { styles } from "./styles"

const User = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={""} resizeMode="center" />
        <Text style={styles.username}>Username</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Text style={styles.optionText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Text style={styles.optionText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default User
