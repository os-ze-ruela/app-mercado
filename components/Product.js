import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable} from "react-native";
import { Button } from "react-native-web";


class Product extends React.Component{
    render(){
        const {id, nome, marca, barcode, imagem} = this.props.product
        console.log("nome = " + nome)
        return(
            <TouchableOpacity
              style={styles.button}

              >
            <View style={{width: '100%', marginHorizontal: '50%', flexDirection:'row'}}>
                <Image style= {{width:150, height: 150, alignItems:'left'}} source={{uri: imagem}}/>
                <View style={{textAlign: 'center', width: '60%'}}>
                <Text style={{fontWeight: 'bold'}}>{nome}</Text>
                <Text>{marca}</Text>
                <Text>{barcode}</Text>
                <Pressable style={styles.buttonHistory}>
                    <Text style={styles.textButton}>Histórico de Preço</Text>
                </Pressable>
                </View>
            </View>
            </TouchableOpacity>
        )
        }

        
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: {width:-2, height:6},
        shadowOpacity:0.2,
        shadowRadius: 3,
        
      },
      buttonHistory: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#53E88B',
      },
      textButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },

})
export default Product;
