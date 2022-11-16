import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import App from "./App";

class Market extends React.Component{
    render(){
        const {name, location, image} = this.props.market
        return(
            <TouchableOpacity
              style={styles.button}
              onPress={()=>{
                console.log('Clicou');
              }}
              >
            <View style={{width: '49%', alignItems: 'center', borderWidth: 0.7, marginHorizontal: '1%' }}>
                <Image style= {{width:150, height: 150}} source={{uri: image}}/>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{name}</Text>
                <Text>{location}</Text>
            </View>
            </TouchableOpacity>
        )
        }

        
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        margin: 15,
        
      },
})
export default Market;
