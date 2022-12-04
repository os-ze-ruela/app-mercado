import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal, Image, FlatList } from 'react-native';
import Reading from '../../components/Reading';
import { FetchReadingsByIdProduct, DeleteReadings} from '../../config/Config';



// const readings = [
//     {date: '10/05/2022', price: '3.14'},
//     {date: '20/06/2022', price: '20.56'},
//     {date: '30/04/2022', price: '23.05'},
//     {date: '14/08/2022', price: '14.06'},
//     {date: '25/09/2022', price: '26.02'},
//   ];



function PriceHistory({ route }) {

  const productName = route.params.name
  const productImage = route.params.image

  const [readings, setReadings] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const leituras = await FetchReadingsByIdProduct()
      setReadings(leituras)
    }
    
    fetchData()
    .catch(console.error);
  }, [])
  


  // const [lists, setLists] = useState(readings);

  const deleteItem = async (item, index) => {
    console.log("ITEM AQUI")
    console.log(item)
    const resp = await DeleteReadings(item.id)
    if(resp == "Item deleted successfully"){
      console.log(resp)
    }
    else{
      console.log("Fail to deleted item")
    }
    
    const arr = [...readings];
    arr.splice(index, 1);
    setReadings(arr);
  };

// console.log(lists)
  return (
    <View style={styles.container}>
      <View style={{width: '100%', marginHorizontal: '80%', flexDirection:'row', backgroundColor:'white', paddingTop:70}}>
        <Image style= {{width:50, height: 50, alignItems:'left'}} source={{uri: productImage}}/>
        <Text style={styles.textTitle}>{productName}</Text>
      </View>
      <SafeAreaView>
        <FlatList data={readings}
          renderItem={({ item, index }) => (<Reading reading={item} handleDelete={() => deleteItem(item, index)}/>)}>
        </FlatList>
      </SafeAreaView>
    </View>
  )
}

export default PriceHistory


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    width:'90%',
    textAlign: 'center',
    marginTop:20,
    marginLeft:1,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'black',
  },
});
