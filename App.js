import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {FontAwesome} from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import { Camera, CameraType } from 'expo-camera';
import BtBarcode from './components/BtBarcode';
import Home from './pages/Home';
import Cam from './pages/Cam'
import {NavigationCam, NavigationHome, NavigationProfile} from './Navigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export function Tela2() {
  return(
    <View style={styles.container2}>
      <Text>Perfil</Text>
    </View>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={NavigationHome} options={{
          tabBarIcon: ({size,color,focused}) => (
            <Ionicons name="ios-home" size={size} color={focused ? '#53E88B' : color }/>
          ),       
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? '#53E88B' : color}}>Mercados</Text>
          )
        }} />
        <Tab.Screen name="Cam" component={NavigationCam} options={{
          tabBarLabel:'',
          tabBarIcon: ({size,color}) => (
            <BtBarcode size={35} color={color}/>
          ),
  
        }} />
        <Tab.Screen name="Profile" component={NavigationProfile} options={{
          tabBarIcon: ({size,color,focused}) => (
            <Ionicons name="ios-person" size={size} color={focused ? '#53E88B' : color }/>
          ),
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? '#53E88B' : color}}>Perfil</Text>
          )
        }}  />
      </Tab.Navigator>
      </NavigationContainer>
  );
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
