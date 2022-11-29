import { Button, Text, View } from "react-native"

import COLORS from "../../constants/themes/colors"
import React from "react"
import { styles } from "./styles"

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories Screen</Text>
      <Button
        title="Go to Products"
        color={COLORS.primary}
        onPress={() => {
          navigation.navigate("Category")
        }}
      />
    </View>
  )
}

export default CategoriesScreen
