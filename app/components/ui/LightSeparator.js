import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../config/colors';


const LightSeparator = () => {
    return (<View style={styles.separator}></View>);
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: colors.light,
        width: '100%',
        height: 1
    }
})
export default LightSeparator;