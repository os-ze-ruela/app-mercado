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

const SCREEN_WIDTH = Dimensions.get('window').width;

class Reading extends React.Component{
    render(){
        //const {id,precoatual,datetime} = this.props.reading 
        const {date, price} = this.props.reading 

        const leftSwipe = (progress, dragX) => {
            const scale = dragX.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            });
            return (
              <TouchableOpacity onPress={this.props.handleDelete} activeOpacity={0.6}>
                <View style={styles.deleteBox}>
                  <Animated.Text style={{transform: [{scale: scale}]}}>
                    Deletar
                  </Animated.Text>
                </View>
              </TouchableOpacity>
            );
          };
          return (
            <Swipeable renderLeftActions={leftSwipe}>
              <View style={styles.container}>
                <Text>{date}</Text>
                <Text>R${price}</Text>
              </View>
            </Swipeable>
          );
        
}
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: SCREEN_WIDTH,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 16,
      },
      deleteBox: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 80,
      },   

})
export default Reading;
