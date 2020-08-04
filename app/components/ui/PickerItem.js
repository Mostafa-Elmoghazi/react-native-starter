import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../../config/colors';

const PickerItem = ({ label, onPress, isSelected }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={isSelected ? styles.selected : styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 15
    },
    selected: {
        backgroundColor: colors.light,
        padding: 15
    }
})

export default PickerItem;