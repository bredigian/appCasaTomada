import React, { useCallback, useEffect } from "react"
import { filterProducts, getProducts, selectProduct } from "../../store/actions"
import { useDispatch, useSelector } from "react-redux"

import { FlatList } from "react-native"
import { ProductItem } from "../../components"
import { useFocusEffect } from "@react-navigation/core"

const Products = ({ navigation }) => {
  const category = useSelector((state) => state.categories.selected)
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  )
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("useEffect")
    dispatch(filterProducts(category.id))
  }, [])
  useFocusEffect(
    useCallback(() => {
      dispatch(getProducts())
    }, [dispatch])
  )
  const onSelected = (item) => {
    dispatch(selectProduct(item.id))
    navigation.navigate("Product", { title: item.name })
  }

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  )
  return (
    <FlatList
      data={filteredProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default Products
