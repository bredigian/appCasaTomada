import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import React from "react"
import { signOut } from "../../store/actions"
import { styles } from "./styles"

const User = () => {
  const dispatch = useDispatch()
  const userData = useSelector(
    (state) => state.auth.userData[0]?.data || state.auth.userData.data
  )
  const logOut = () => {
    console.log("log out")
    dispatch(signOut())
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/img//user/user.png")}
              resizeMode="center"
              style={styles.image}
            />
          </View>
          <View style={styles.userData}>
            <Text style={styles.name}>
              {userData.firstName} {userData.lastName}
            </Text>
            <Text style={styles.email}>{userData.email}</Text>
          </View>
        </View>
        <View style={styles.options}>
          <TouchableOpacity style={styles.option} onPress={() => {}}>
            <Text style={styles.optionText}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={logOut}>
            <Text style={{ ...styles.optionText, ...styles.optionTextLogOut }}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default User
