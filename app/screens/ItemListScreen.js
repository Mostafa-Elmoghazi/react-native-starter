import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Card from '../components/ui/Card';
import Screen from '../components/ui/Screen';
import colors from '../config/colors';
const image = { uri: 'http://www.homepictures.in/wp-content/uploads/2020/08/1650-Sq-Ft-3BHK-Flat-Roof-Type-Modern-Two-Floor-House-at-5-Cent-Plot-780x470.jpg' };
const items = [
    {
        id: 1,
        title: "First item to sell here",
        price: "$100",
        image: image
    },
    {
        id: 2,
        title: "Second item to sell here",
        price: "$35",
        image: image
    },
    {
        id: 3,
        title: "Third item to sell here",
        price: "$67",
        image: image
    }

]

const ItemListScreen = () => {

    return (
        <Screen style={styles.container}>
            <FlatList keyExtractor={item => item.id.toString()} data={items} renderItem={({ item, index, separator }) => (
                <Card
                    title={item.title}
                    subtitle={item.price}
                    image={item.image}
                />
            )}></FlatList>
        </Screen>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.light
    }
})

export default ItemListScreen;