import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';

const AppTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={icon} size={25} color={colors.inputIcon} style={styles.icon} />
            <TextInput {...otherProps} style={styles.textInput} />
        </View>);
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        backgroundColor: colors.textInputBG,
        borderRadius: 25,
        padding: 15,
        marginVertical: 20
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        color: colors.textInput,
        width: '100%',
        fontSize: 18
    }
});

export default AppTextInput;