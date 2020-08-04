import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>
                {children}
            </View>

        </SafeAreaView>);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})

export default Screen;