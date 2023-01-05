import { Loading, ProductItem } from "../../components"
import React, { useCallback, useEffect, useState } from "react"
import { filterProducts, getProducts, selectProduct } from "../../store/actions"
import { useDispatch, useSelector } from "react-redux"

import { FlatList } from "react-native"
import { useFocusEffect } from "@react-navigation/core"

const Products = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const category = useSelector((state) => state.categories.selected)
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(filterProducts(category.id))
  }, [loading])
  useFocusEffect(
    useCallback(() => {
      dispatch(getProducts())
      setTimeout(() => {
        setLoading(true)
      }, 2000)
    }, [dispatch])
  )
  const onSelected = (item) => {
    dispatch(selectProduct(item.id))
    navigation.navigate("Product", { title: item.name })
  }

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  )
  return !loading ? (
    <Loading />
  ) : (
    <FlatList
      data={filteredProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default Products
