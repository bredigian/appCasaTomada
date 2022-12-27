import { Image, Text, View } from "react-native"

import { MAPS_API_KEY } from "../../constants/maps"
import React from "react"
import { styles } from "./styles"

const MapPreview = (props) => {
  const mapPreviewUrl = props.location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng},NY&zoom=13&size=600x300&maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${props.location.lat},${props.location.lng}&key=${MAPS_API_KEY}`
    : ""
  return (
    <View style={{ ...styles.mapPreview, ...props.style }}>
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
      ) : (
        props.children
      )}
    </View>
  )
}

export default MapPreview
