import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function BtBarcode({size,color}){
    return(
        <View style={styles.container}>
            <Ionicons name="ios-barcode" size={size} color='white' />
        </View>
    )  
}

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: '#53E88B',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
    }
})