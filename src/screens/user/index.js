import { Image, Text, TouchableOpacity, View } from "react-native"

import React from "react"
import { styles } from "./styles"
import { useSelector } from "react-redux"

const User = () => {
  const userData = useSelector(
    (state) => state.auth.userData[0]?.data || state.auth.userData.data
  )
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={""} resizeMode="center" />
        <View style={styles.userData}>
          <Text style={styles.firstName}>{userData.firstName}</Text>
          <Text style={styles.lastName}>{userData.lastName}</Text>
        </View>
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
