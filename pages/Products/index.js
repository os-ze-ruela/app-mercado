import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal, Image, FlatList } from 'react-native';
import Product from '../../components/Product';
import { FetchProductsByID } from '../../config/Config';


const StaticMarketImage = "https://static.paodeacucar.com/img/uploads/1/35/12467035.png"


const test = [
  { name: "Produto 1", brand: "Marca 1", barCode: "55555555555", image: StaticMarketImage },
  { name: "Produto 2", brand: "Marca 2", barCode: "55555555555", image: StaticMarketImage },
  { name: "Produto 3", brand: "Marca 3", barCode: "55555555555", image: StaticMarketImage },
  { name: "Produto 4", brand: "Marca 4", barCode: "55555555555", image: StaticMarketImage },
  { name: "Produto 5", brand: "Marca 5", barCode: "55555555555", image: StaticMarketImage },
  { name: "Produto 6", brand: "Marca 6", barCode: "55555555555", image: StaticMarketImage },
  { name: "Produto 7", brand: "Marca 7", barCode: "55555555555", image: StaticMarketImage },
];

console.log(test)


function Products({ route }) {

  const marketName = route.params.name
  const products = route.params.products

  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const produtos = await FetchAllProductsById(productsList)
  //     setProducts(produtos)
  //   }

  //   fetchData()
  //     .catch(console.error);
  // }, [])


  // async function FetchAllProductsById(products) {
  //   let productsList = []
  //   products.forEach(product => {
  //     const productJson = await FetchProductsByID(product.idProduto.id)
  //     productsList.push(productJson)
  //   });
  //   return productsList
  // }


  console.log("produtos extraidos")
  console.log(products)

  return (
    <View style={styles.container}>
      <Text>Lista de Produtos do Mercado {marketName}</Text>
      <SafeAreaView>
        <FlatList data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (<Product product={item.idProduto} />)}>
        </FlatList>
      </SafeAreaView>
    </View>
  )
}

export default Products


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
