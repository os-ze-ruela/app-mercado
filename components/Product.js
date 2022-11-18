import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-web";

class Product extends React.Component{
    render(){
        const {name, brand, barCode, image} = this.props.product

        return(
            <TouchableOpacity
              style={styles.button}

              >
            <View style={{width: '100%', marginHorizontal: '50%', flexDirection:'row'}}>
                <Image style= {{width:150, height: 150, alignItems:'left'}} source={{uri: image}}/>
                <View style={{textAlign: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>{name}</Text>
                <Text>{brand}</Text>
                <Text>{barCode}</Text>
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
})
export default Product;
