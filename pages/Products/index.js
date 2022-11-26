import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal, Image, FlatList } from 'react-native';
import Product from '../../components/Product';
import { FetchProductsByID } from '../../config/Config';


function Products({ route }) {

  const marketName = route.params.name
  const marketImage = route.params.image
  const products = route.params.products



  console.log(marketName)
  console.log(marketImage)


  return (
    <View style={styles.container}>
      <View style={{width: '100%', marginHorizontal: '50%', flexDirection:'row', backgroundColor:'white', paddingTop:40}}>
        <Image style= {{width:50, height: 50, alignItems:'left'}} source={{uri: marketImage}}/>
        <Text style={styles.textTitle}>Lista de Produtos do Mercado {marketName}</Text>
      </View>
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
  textTitle: {
    textAlign: 'center',
    marginTop:20,
    marginLeft:25,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'black',
  },
});
