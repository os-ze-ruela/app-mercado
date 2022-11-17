import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal, Image, FlatList } from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import { Camera, CameraType } from 'expo-camera';



export default function Cam() {

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
  