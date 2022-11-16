import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {FontAwesome} from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import { Camera, CameraType } from 'expo-camera';
import BtBarcode from './components/BtBarcode';
import Market from './Market';


const StaticMarketImage = "https://img.freepik.com/vetores-premium/logotipo-do-supermercado_23-2148459011.jpg?w=2000"

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


function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList data={markets}
          numColumns={2}
          keyExtractor={(item,index)=> index.toString()}
          renderItem={({item})=> (<Market market={item}/>)}>
        </FlatList>
      </SafeAreaView>
    </View>
  )
}

export function Tela2() {
  return(
    <View style={styles.container2}>
      <Text>Perfil</Text>
    </View>
  )
}

function Cam() {

  const camRef = useRef(null)
  const [type,setType] = useState(CameraType.back)
  const [hasPermission,setHasPermission] = useState(null)
  const [foto, setFoto] = useState(null)
  const [open,setOpen] = useState(false)

  useEffect ( () => {
    (async ()=> {
      const {status} = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === "granted");  
      }) ();
  }, [])

  if(hasPermission === null){
    return <View/>
  }

  if(hasPermission === false){
    return <Text>Acesso Negado!</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        >
          <View style={styles.contentButtons}>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>{
                setType(type === CameraType.back
                  ? CameraType.front
                  : CameraType.back
                  )
              }}
              >
                <FontAwesome name="bullseye" size={23} color="red"></FontAwesome>
              </TouchableOpacity>
              
          </View>
        </Camera>

    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Principal" component={HomeScreen} options={{
          tabBarIcon: ({size,color}) => (
            <Ionicons name="ios-home" size={size} color={color}/>
          )
        }} />
        <Tab.Screen name="Camera" component={Cam} options={{
          tabBarLabel:'',
          tabBarIcon: ({size,color}) => (
            <BtBarcode size={35} color={color}/>
          )
        }} />
        <Tab.Screen name="Perfil" component={Tela2} options={{
          tabBarIcon: ({size,color}) => (
            <Ionicons name="ios-person" size={size} color={color}/>
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
