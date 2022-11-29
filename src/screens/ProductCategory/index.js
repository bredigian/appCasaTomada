import { Button, Text, View } from "react-native"

import COLORS from "../../constants/themes/colors"
import React from "react"
import { styles } from "./styles"

const CategoryProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category Product screen</Text>
      <Button
        title="Go to Product detail"
        color={COLORS.primary}
        onPress={() => {
          navigation.navigate("Detail")
        }}
      />
    </View>
  )
}

export default CategoryProductScreen
