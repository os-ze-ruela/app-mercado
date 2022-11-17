import React from "react"
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal, Image, FlatList } from 'react-native';
import Market from "../../components/Market"

const StaticMarketImage = "https://cdn.freebiesupply.com/logos/thumbs/2x/the-fresh-market-logo.png"

const markets= [
{name:"Mercado 1", location: "Birigui", image:StaticMarketImage},
{name:"Mercado 2", location: "Birigui", image:StaticMarketImage},
{name:"Mercado 3", location: "Birigui", image:StaticMarketImage},
{name:"Mercado 4", location: "Birigui", image:StaticMarketImage},
{name:"Mercado 5", location: "Birigui", image:StaticMarketImage},
{name:"Mercado 6", location: "Birigui", image:StaticMarketImage},
{name:"Mercado 7", location: "Birigui", image:StaticMarketImage},
{name:"Mercado 8", location: "Birigui", image:StaticMarketImage},
{name:"Mercado 9", location: "Birigui", image:StaticMarketImage},
{name:"Mercado 10", location: "Birigui", image:StaticMarketImage},
];


export default function Home({navigation}) {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <FlatList data={markets}
            numColumns={2}
            keyExtractor={(item,index)=> index.toString()}
            renderItem={({item})=> (<Market market={item} navigation={navigation}/>)}>
          </FlatList>
        </SafeAreaView>
      </View>
      
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      backgroundColor: '#aba',
      alignItems: 'center',
      justifyContent: 'center',
    },
    camera: {
      width: "100%",
      height: "100%",
    },
    button: {
      alignItems: 'flex-start',
      margin: 35,
    },
    contentModal: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-end",
      margin: 20,
    },
    closeButton: {
      position: "absolute",
      top: 10,
      left: 2,
      margin: 10,
    },
    imgPhoto: {
      width: "100%",
      height: 400,
    },  
  });
  