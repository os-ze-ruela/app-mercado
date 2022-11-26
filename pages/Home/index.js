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

});
