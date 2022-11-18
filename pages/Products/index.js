import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal, Image, FlatList } from 'react-native';
import Product from '../../components/Product';


const StaticMarketImage = "https://static.paodeacucar.com/img/uploads/1/35/12467035.png"

const products= [
{name:"Produto 1", brand: "Marca 1", barCode: "55555555555",image:StaticMarketImage},
{name:"Produto 2", brand: "Marca 2", barCode: "55555555555",image:StaticMarketImage},
{name:"Produto 3", brand: "Marca 3", barCode: "55555555555",image:StaticMarketImage},
{name:"Produto 4", brand: "Marca 4", barCode: "55555555555",image:StaticMarketImage},
{name:"Produto 5", brand: "Marca 5", barCode: "55555555555",image:StaticMarketImage},
{name:"Produto 6", brand: "Marca 6", barCode: "55555555555",image:StaticMarketImage},
{name:"Produto 7", brand: "Marca 7", barCode: "55555555555",image:StaticMarketImage},
];


function Products({}) {
    // const name = route.params.name
    return (
    
        <View style={styles.container}>
        <SafeAreaView>
          <FlatList data={products}
            keyExtractor={(item,index)=> index.toString()}
            renderItem={({item})=> (<Product product={item}/>)}>
          </FlatList>
          <Button>Histórico</Button>
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
  