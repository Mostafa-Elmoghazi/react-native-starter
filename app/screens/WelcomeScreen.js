import { ImageBackground, View, Image, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

import AppButton from '../components/ui/AppButton';

const WelcomeScreen = () => {
    return (
        <ImageBackground blurRadius={1} source={require('../assets/Home1.jpg')} style={styles.bgImage}>
            <View style={styles.headerView}>
                <Image resizeMode="contain" style={styles.logoImage} source={require('../assets/buy-logo.png')} />
                <Text style={styles.tagline}>Best Buy Place</Text>
            </View>
            <View style={styles.contentView}>

            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => alert("clicked")} />
                <AppButton title="Register" color="secondary" onPress={() => alert("clicked")} />
            </View>



        </ImageBackground >);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        justifyContent: "flex-end",
        alignItems: 'center',
        flex: 1,
        marginTop: 40
    },
    logoImage: {
        width: 100,
        height: 100
    },
    headerView: {
        position: 'absolute',
        top: 50,
        alignItems: "center",
    },
    tagline: {
        color: '#fff',
        fontSize: 26,
        fontWeight: "600",
        paddingVertical: 20
    },
    contentView: {
        flex: 6
    },
    footerView: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonsContainer: {
        width: '100%',
        padding: 10
    },
});


export default WelcomeScreen;