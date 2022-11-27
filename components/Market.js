import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {FetchAllMarketProductsByMarketID} from "../config/Config"

class Market extends React.Component {
    render() {
        const { id, name, location, image } = this.props.market
        const navigation = this.props.navigation
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                    var products = await FetchAllMarketProductsByMarketID(id)
                    console.log(JSON.stringify(products))
                    navigation.navigate('Produtos', { products:  products, name:name, image:image})
                }}
            >
                <View style={{ width: '60%', alignItems: 'center', marginHorizontal: '1%' }}>
                    <Image style={{ width: 150, height: 150 }} source={{ uri: image }} />
                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{name}</Text>
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
        shadowOffset: { width: -2, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },
})
export default Market;
