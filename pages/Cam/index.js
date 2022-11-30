import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Modal, Pressable, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import { IconButton, Colors } from 'react-native-paper';
import { FetchProductsByBarcode, FetchReadings } from '../../config/Config';

export default function Cam() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);
  //const [modal2Visible, setmodal2Visible] = useState(false);
  const [hasProducts, setHasProducts] = useState(true);


  
  const [idProduct, setIdProduct] = useState(null)
  const [imagem, setImagem] = useState(null)
  const [nome, setNome] = useState(null)
  const [preco, setPreco] = useState(null)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    try {

      const product = await FetchProductsByBarcode(data)
      setIdProduct(product.id)
      setImagem(product.imagem)
      setNome(product.nome)
      setPreco(product.preco)
      console.log('produto: ', product)
      setHasProducts(true)
      setmodalVisible(true)
    } catch (error) {
      console.log("Caiu no erro")
      setHasProducts(false)
      setmodalVisible(true)
    }

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
      <BarcodeMask edgeColor={'#53E88B'} width={300} height={100} />
      {scanned && <IconButton
      style={styles.buttonRetry}
      icon="reload"
      color={Colors.white}
      size={35}
      onPress={() => {
        setScanned(false)
        setmodalVisible(false)
      }} 
      />

      }
      
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setmodalVisible(!modalVisible);
            }}
          >

          {
          hasProducts ? (<>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ width: '100%', marginHorizontal: '50%', flexDirection: 'row' }}>
                  <Image style={{ width: 60, height: 60, alignItems: 'left' }} source={{ uri: imagem }} />
                  <View>
                  <Text style={styles.modalText}>{nome}</Text>
                  <Text style={styles.modalTextPrice}>R$ {preco}</Text>
                  </View>
                  <IconButton
                    style={styles.button}
                    icon="plus"
                    color={Colors.white}
                    size={35}
                    onPress={async() => {
                      setmodalVisible(false)
                      const timeElapsed = Date.now();
                      const today = new Date(timeElapsed);
                      console.log(preco, today.toISOString(),idProduct)
                      const resp = await FetchReadings(preco, today.toISOString(), idProduct)
                      console.log(resp)
                    }}
                  />
                  <IconButton
                  style={styles.buttonCloseModal}
                  icon="close"
                  color={Colors.black}
                  size={25}
                  onPress={() => setmodalVisible(false)}
                  />
                </View>
              </View>

            </View>
        </>) : (<>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ width: '100%', marginHorizontal: '60%', flexDirection: 'row' }}>
                  <Image style={{ width: 60, height: 60, alignItems: 'left' }} source={{ uri: "https://us.123rf.com/450wm/dzm1try/dzm1try2011/dzm1try201100099/159901749-secret-product-icon-black-box-clipart-image-isolated-on-white-background.jpg?ver=60" }} />
                  <Text style={styles.modalTextNotFind}>PRODUTO NÃO ENCONTRADO</Text>
                  <IconButton
                  style={styles.buttonCloseModal}
                  icon="close"
                  color={Colors.black}
                  size={25}
                  onPress={() => setmodalVisible(false)}
                  />
                </View>
              </View>
            </View>
        </>)
        }
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
    height: 150,
    width: 300,
    overflow: 'hidden',
    borderWidth: 5,
    borderRadius: 30,
    borderColor: 'red',

  },
  buttonScan: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#53E88B',
    borderRadius: 30,
    color: 'white'

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 450
  },
  modalView: {
    marginTop: 100,
    width: 400,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
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
    marginHorizontal: 20,
    alignSelf: 'right',
    alignItems: 'center',
    borderRadius: 30,
    padding: 5,
    elevation: 2,
    backgroundColor: '#53E88B'
  },
  buttonClose: {
    marginHorizontal: 10,
    alignSelf: 'right',
    alignItems: 'center',
    borderRadius: 30,
    padding: 5,
    elevation: 2,
    backgroundColor: 'red'
  },
  buttonCloseModal: {

    marginHorizontal: -11,
    marginTop: -21,
    alignSelf: 'right',
    alignItems: 'center',
    borderRadius: 30,
    padding: 5,
    elevation: 2,
    backgroundColor: 'transparent'
  },
  buttonRetry: {
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
    elevation: 2,
    backgroundColor: '#53E88B'
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
  },
  modalTextNotFind: {
    marginTop: 15,
    textAlign: "center",
    width: 290,
    fontWeight: "bold",
    fontSize: 16,
  },
  modalTextPrice: {
    textAlign: "center",
    width: 200,
    fontWeight: "bold",
    fontSize: 20,
    color:'#53E88B'
  }

});
