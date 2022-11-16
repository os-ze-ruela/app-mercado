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
                console.log(name);
              }}
              >
            <View style={{width: '49%', alignItems: 'center', marginHorizontal: '1%'}}>
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
        margin: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: {width:-2, height:6},
        shadowOpacity:0.2,
        shadowRadius: 3,
        
      },
})
export default Market;
