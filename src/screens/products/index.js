import { Button, FlatList, Text, View } from "react-native"

import COLORS from "../../constants/themes/colors"
import { PRODUCTS } from "../../constants/data/products"
import { ProductItem } from "../../components"
import React from "react"
import { styles } from "./styles"

const Products = ({ navigation, route }) => {
  const { categoryId, title } = route.params

  const productsFiltered = PRODUCTS.filter(
    (product) => product.cateogoryId === categoryId
  )

  const onSelected = (item) => {
    navigation.navigate("Product", { title: item.name, productId: item.id })
  }

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  )
  return (
    <FlatList
      data={productsFiltered}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default Products
