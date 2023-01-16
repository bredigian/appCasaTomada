import * as Location from "expo-location"

import { Alert, Switch, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"

import { AntDesign } from "@expo/vector-icons"
import { Input } from "../../components"
import { URL_BASE } from "../../constants/firebase"
import { URL_GEOCODING } from "../../constants/maps"
import colors from "../../constants/themes/colors"
import { styles } from "./styles"
import { useSelector } from "react-redux"

const Address = () => {
  const userData = useSelector(
    (state) => state.auth?.userData[0] || state.auth?.userData
  )
  const [address, setAddress] = useState(userData?.data?.address || "")
  const [isEnabled, setIsEnabled] = useState(false)
  const [ok, setOk] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions()
    if (!isLocationOk) {
      return
    }
    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    })
    const responseCoords = await fetch(
      URL_GEOCODING(location.coords.latitude, location.coords.longitude)
    )
    if (!responseCoords.ok) {
      throw new Error("Something went wrong with Geocoding")
    }
    const dataCoords = await responseCoords.json()
    if (!dataCoords.results) {
      throw new Error("Address not found")
    }
    console.log("dataAddressFormated", dataCoords.results[0].formatted_address)
    setAddress(dataCoords.results[0].formatted_address)
    return dataCoords.results[0].formatted_address
  }
  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== "granted") {
      Alert.alert(
        "Insufficient permissions",
        "You need to grant location permissions to use this app.",
        [{ text: "Okay" }]
      )
      return false
    }
    return true
  }
  const saveAddress = async () => {
    if (isEnabled) {
      try {
        const dataAddress = await handleGetLocation()
        const response = await fetch(`${URL_BASE}/users/${userData.id}.json`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              address: dataAddress,
              email: userData.data.email,
              firstName: userData.data.firstName,
              lastName: userData.data.lastName,
            },
          }),
        })
        if (!response.ok) {
          throw new Error("Something went wrong!")
        }
        setOk(true)
        Alert.alert(
          "Is possible that you need to restart the app to see the changes",
          "",
          [{ text: "Okay" }]
        )
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const response = await fetch(`${URL_BASE}/users/${userData.id}.json`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              address: address,
              email: userData.data.email,
              firstName: userData.data.firstName,
              lastName: userData.data.lastName,
            },
          }),
        })
        if (!response.ok) {
          throw new Error("Something went wrong!")
        }
        setOk(true)
        Alert.alert(
          "Is possible that you need to restart the app to see the changes",
          "",
          [{ text: "Okay" }]
        )
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.getLocation}>
        <Text style={styles.getLocationText}>Get location via GPS</Text>
        <Switch
          trackColor={{ false: colors.secundary, true: colors.primary }}
          thumbColor={isEnabled ? colors.white : colors.white}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View>
        <Input
          label="Address"
          placeholder="Enter your address"
          placeholderTextColor={colors.grey}
          style={styles.input}
          value={address}
          onChangeText={(text) => setAddress(text)}
          editable={!isEnabled}
        />
      </View>
      <View style={styles.confirm}>
        <TouchableOpacity onPress={saveAddress} style={styles.confirmButton}>
          <Text style={styles.confirmText}>Save address</Text>
        </TouchableOpacity>
        {ok ? <AntDesign name="checkcircle" size={30} color="green" /> : null}
      </View>
    </View>
  )
}

export default Address
