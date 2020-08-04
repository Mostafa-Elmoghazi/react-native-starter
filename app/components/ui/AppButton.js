import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../../config/colors';


const AppButton = ({ title, onPress, color = "primary" }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>);
}


const styles = StyleSheet.create({
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 25,
        marginVertical: 10
    },
    text: {
        fontSize: 18,
        color: colors.white,
        fontWeight: "bold",
        textTransform: "uppercase"
    }
})

export default AppButton;