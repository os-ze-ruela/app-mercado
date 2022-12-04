import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function Profile() {
  
  return(
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          style={styles.container3}
          contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
        >

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>{console.log('Edit foto')}}>
            <Image style={styles.userImg} source={require('./muie.jpg')}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>Isadora Leite</Text>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.userBtn} onPress={()=>{console.log('edit')}}>
              <Text>Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userBtn} onPress={()=>{console.log('Desco')}}>
              <Text>Desconectar</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.subTitle}>Configurações</Text>

          <View style={{flexDirection: 'column', width: '100%', alignItems: 'center'}}>
            <TouchableOpacity style={styles.optBtn} onPress={()=>{console.log('fav')}}>
              <Text>Locais favoritos </Text>
              <Ionicons name="ios-star" size={20} color='black' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optBtn} onPress={()=>{console.log('Edit fav')}}>
              <Text>Editar locais favoritos </Text>
              <Ionicons name="ios-hammer" size={20} color='black' />
            </TouchableOpacity>
          </View>

          <Text style={styles.subTitle}>Sobre nós</Text>

          <View style={{flexDirection: 'column', width: '100%', alignItems: 'center'}}>
            <TouchableOpacity style={styles.optBtn} onPress={()=>{console.log('jkj')}}>
              <Text>Conheça a SoftRuela </Text>
              <Ionicons name="ios-earth" size={20} color='black' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optBtn} onPress={()=>{console.log('Segurança')}}>
              <Text>Segurança </Text>
              <Ionicons name="ios-key" size={20} color='black' />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>   
)
}

const styles = StyleSheet.create({
  container3: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userBtn: {
    borderColor: "#53E88B",
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5, 
  },
  optBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: "#53E88B",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 35,
    marginHorizontal: 12,
    margin: 7,
    width: '100%', 
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  subTitle: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

