import React, { useState, useEffect } from "react"
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal, Image, FlatList } from 'react-native';
import Market from "../../components/Market"
import {FetchAllMarkets} from "../../config/Config";


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
