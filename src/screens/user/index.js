import * as ImagePicker from "expo-image-picker"

import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useEffect, useState } from "react"
import { clearCart, signOut } from "../../store/actions/index"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { useDispatch, useSelector } from "react-redux"

import { AntDesign } from "@expo/vector-icons"
import colors from "../../constants/themes/colors"
import { styles } from "./styles"

const User = ({ navigation }) => {
  const storage = getStorage()
  const [pickedUri, setPickedUri] = useState(null)
  const dispatch = useDispatch()
  const userData = useSelector(
    (state) => state.auth.userData[0]?.data || state.auth.userData?.data
  )
  const onConfirm = () => {
    dispatch(clearCart())
    dispatch(signOut())
  }
  const logOut = () => {
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Log Out",
        style: "default",
        onPress: () => onConfirm(),
      },
    ])
  }
  const goToSettings = () => {
    navigation.navigate("Settings")
  }
  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync()
    if (status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      )
      return false
    }
    return true
  }
  useEffect(() => {
    getImageAvatar()
  }, [])
  const getImageAvatar = () => {
    const response = ref(storage, `avatar/${userData.id}`)
    getDownloadURL(response)
      .then((url) => {
        setPickedUri(url)
        console.log("url", response)
      })
      .catch((error) => {
        console.log(error)
        setPickedUri(null)
      })
  }
  const handleUploadImage = async (uri) => {
    const response = await fetch(uri)
    const blob = await response.blob()
    const uploadImage = ref(storage, `avatar/${userData.id}`)
    try {
      await uploadBytes(uploadImage, blob)
    } catch (error) {
      console.log(error)
    }
  }
  const handleTakeImage = async () => {
    const isCameraOk = await verifyPermissions()
    if (!isCameraOk) return
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    })
    setPickedUri(image.assets[0].uri)
    await handleUploadImage(image.assets[0].uri)
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.imageContainer}>
            {!pickedUri ? (
              <Image
                source={require("../../../assets/img/user/user.png")}
                resizeMode="center"
                style={styles.image}
              />
            ) : (
              <Image source={{ uri: pickedUri }} style={styles.image} />
            )}
            <TouchableOpacity
              style={styles.editImage}
              onPress={handleTakeImage}
            >
              <AntDesign name="edit" size={12} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.userData}>
            <Text style={styles.name}>
              {userData.firstName} {userData.lastName}
            </Text>
            <Text style={styles.email}>{userData.email}</Text>
          </View>
        </View>
        <View style={styles.options}>
          <TouchableOpacity style={styles.option} onPress={goToSettings}>
            <Text style={styles.optionText}>Settings</Text>
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
