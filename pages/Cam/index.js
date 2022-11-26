import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Modal, Pressable, Image} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import { IconButton, Colors } from 'react-native-paper';

export default function Cam() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setModalVisible(true)
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    
    <View style={styles.outsideContainer}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <BarcodeMask edgeColor={'#53E88B'} width={300} height={100}/>
      {scanned && <Button title={'Tap to Scan Again'} onPress={() =>{ 
        setScanned(false) 
        setModalVisible(false)
        }}/>}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{width: '100%', marginHorizontal: '50%', flexDirection:'row'}}>
            <Image style= {{width:60, height: 60, alignItems:'left'}} source={{uri: "https://naturalone.vteximg.com.br/arquivos/ids/156996-1000-1000/suco-de-laranja-integral-180ml-ambiente-natural-one.jpg?v=637971315995030000"}}/>
            <Text style={styles.modalText}>SUCO DE LARANJA INTEGRAL 180ML AMBIENTE - NATURAL ONE</Text>
            <IconButton
                style={styles.button}
                icon="plus"
                color={Colors.white}
                size={35}
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  
  );
}

const styles = StyleSheet.create({
  outsideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  barCodeBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height:150,
    width: 300,
    overflow: 'hidden',
    borderWidth: 5,
    borderRadius:30,
    borderColor:'red',

  },
  buttonScan: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#53E88B',
    borderRadius:30,
    color:'white'

  },
  centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop:450
  },
  modalView: {
    marginTop: 100,
    width:400,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    marginHorizontal:30,
    alignSelf: 'right',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    backgroundColor:'#53E88B'
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    width: 200, 
  }
  
});
