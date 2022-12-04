import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Animated,
    TouchableOpacity,
  } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { format } from "date-fns";
import { DeleteReadings } from "../config/Config";

const SCREEN_WIDTH = Dimensions.get('window').width;

class Reading extends React.Component{
    render(){
        const {datatime, precoatual} = this.props.reading 
        

        const rightSwipe = (progress, dragX) => {
            const scale = dragX.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            });
            return (
              <TouchableOpacity onPress={ this.props.handleDelete} activeOpacity={0.6}>
                <View style={styles.deleteBox}>
                  <Animated.Text style={styles.deleteText}>
                  <View style={styles.iconTrash}>
                  <Ionicons name="trash" size={25} color='white' />
                  </View>
                  </Animated.Text>
                </View>
              </TouchableOpacity>
            );
          };
          return (
            <Swipeable renderRightActions={rightSwipe}>
              <View style={styles.container}>
                <View style={styles.icon}>
                <Ionicons name="calendar" size={25} color='black' />
                </View>
                <View style={{flexDirection:'column'}}>
                <Text style={styles.date}>{format(new Date(datatime), "dd/MM/yyyy")}</Text>
                <Text style={styles.dateText}>Dia da consulta</Text>
                </View>
                <View style={{flexDirection:'column'}}>
                <Text style={styles.price}>R$ {precoatual}</Text>
                <Text style={styles.priceText}>Preço do produto</Text>
                </View>
              </View>
            </Swipeable>
          );
        
}
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: SCREEN_WIDTH,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        flexDirection:'row'
      },
      deleteBox: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 70,
      },   
      icon:{
        display: 'flex',
        marginRight: 25,
    },
      iconTrash:{
        display: 'flex',
    },
    date: {
      textAlign: "left",
      width: 200,
      fontWeight: "bold",
      fontSize: 18,
      color:'black'
    },
    dateText: {
      textAlign: "left",
      width: 200,
      fontWeight: "bold",
      fontSize: 10,
      color:'grey'
    },
    price: {
      textAlign: "left",
      width: 100,
      fontWeight: "bold",
      fontSize: 20,
      color:'#53E88B'
    },
    priceText: {
      textAlign: "left",
      width: 100,
      fontWeight: "bold",
      fontSize: 10,
      color:'grey'
    },
    deleteText: {
      fontWeight: "bold",
      fontSize: 15,
      color:'white'
    }

})
export default Reading;
