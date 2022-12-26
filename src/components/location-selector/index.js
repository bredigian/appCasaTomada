import * as Location from "expo-location"

import { Button, Text, View } from "react-native"
import React, { useState } from "react"

import colors from "../../constants/themes/colors"
import { styles } from "./styles"

const LocationSelector = () => {
  const [location, setLocation] = useState()
  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions()
    if (!isLocationOk) {
      return
    }
    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    })
    setLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    })
    props.onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    })
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
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {location ? (
          <Text>
            {location.lat},{location.lng}
          </Text>
        ) : (
          <Text>Awaiting location...</Text>
        )}
      </View>
      <Button
        title="Get Location"
        color={colors.secundary}
        onPress={handleGetLocation}
      />
    </View>
  )
}

export default LocationSelector
