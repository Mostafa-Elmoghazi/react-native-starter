import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import Card from '../components/ui/Card';
import Screen from '../components/ui/Screen';
import colors from '../config/colors';
import ListItem from '../components/ui/ListItem';

const ItemDetailsScreen = () => {
    const image = { uri: 'http://www.homepictures.in/wp-content/uploads/2020/08/1650-Sq-Ft-3BHK-Flat-Roof-Type-Modern-Two-Floor-House-at-5-Cent-Plot-780x470.jpg' };
    return (
        <Screen>
            <Image style={styles.image} source={image} />
            <View style={styles.details}>
                <Text style={styles.title}>First item to sell here</Text>
                <Text style={styles.price}>$100</Text>
            </View>
            <View>
                <ListItem title="Mostaaf Elmoghazi" subtitle="5 Listing" image={require("../assets/avatar.jpg")} />
            </View>
        </Screen>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    details: {
        padding: 20
    },
    image: {
        height: 250,
        width: '100%'
    },
    title: {
        fontSize: 18,
        color: colors.primary
    },
    price: {
        color: colors.secondary,
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10
    }
})

export default ItemDetailsScreen;