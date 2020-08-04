import { View, Image, StyleSheet, Button } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const ViewImageScreen = () => {
    const image = { uri: 'http://www.homepictures.in/wp-content/uploads/2020/08/1650-Sq-Ft-3BHK-Flat-Roof-Type-Modern-Two-Floor-House-at-5-Cent-Plot-780x470.jpg' };
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={35} color="white" />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={35} color="white" />
            </View>
            <Image resizeMode="contain" source={image} style={styles.image}></Image>
        </View>
    );
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30
    },
    container: {
        backgroundColor: colors.dark,
        flex: 1
    }
})

export default ViewImageScreen;