import React, { useState, useEffect } from "react"
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal, Image, FlatList } from 'react-native';
import Market from "../../components/Market"
import {FetchAllMarkets} from "../../config/Config";

const StaticMarketImage = "https://cdn.freebiesupply.com/logos/thumbs/2x/the-fresh-market-logo.png"

/*
const markets= [
{name:"Super Mufatto", location: "Birigui", image:"https://api-avaliacoesempresas.bne.com.br/api/v1/company/super-muffato/logo"},
{name:"Amigão", location: "Birigui", image:"https://assis.amigaoonline.com.br/skin/frontend/amigaoonline/2021/images/logoface.png"},
{name:"Pão de Açucar", location: "Birigui", image:"https://i.pinimg.com/736x/29/a9/b2/29a9b2d25a6c93fef9249197c57e583c.jpg"},
{name:"Carrefour", location: "Birigui", image:"https://i.pinimg.com/200x/b3/ee/db/b3eedb0b0307783844aae4f3f96fcfc5.jpg"},
{name:"Dia", location: "Birigui", image:"https://www.dia.com.br/card-dia.png"},
{name:"Tauste", location: "Birigui", image:"https://institucional.tauste.com.br/images/uploads/meta-image-01.png"},
{name:"Extra", location: "Birigui", image:"https://www.extra-imagens.com.br/html/logo/logo_extra.jpg"},
{name:"Mercado 8", location: "Birigui", image:StaticMarketImage},
{name:"Mercado 9", location: "Birigui", image:StaticMarketImage},
{name:"Mercado 10", location: "Birigui", image:StaticMarketImage},
];
*/


export default function Home({ navigation }) {



  const [markets, setMarkets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const mercados = await FetchAllMarkets()
      setMarkets(mercados)
    }

    fetchData()
      .catch(console.error);
  }, [])

  return (

    <View style={styles.container}>
      <SafeAreaView>
        <FlatList data={markets}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (<Market market={item} navigation={navigation} />)}>
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
