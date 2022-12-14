import * as Location from "expo-location"

import { Button, Text, View } from "react-native"
import React, { useEffect, useState } from "react"

import MapPreview from "../map-preview"
import colors from "../../constants/themes/colors"
import { styles } from "./styles"

const LocationSelector = ({ onSelectLocation }) => {
  const [pickedLocation, setPickedLocation] = useState()
  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions()
    if (!isLocationOk) {
      return
    }
    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    })
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    })
    props.onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    })
  }
  useEffect(() => {
    onSelectLocation(pickedLocation)
  }, [pickedLocation])
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
      <MapPreview style={styles.preview} location={pickedLocation}>
        <Text>No location chosen yet!</Text>
      </MapPreview>
      <Button
        title="Get Location"
        color={colors.secundary}
        onPress={handleGetLocation}
      />
    </View>
  )
}

export default LocationSelector
