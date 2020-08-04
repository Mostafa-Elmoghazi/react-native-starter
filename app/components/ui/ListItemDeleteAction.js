import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ListItemDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: '100%',
        backgroundColor: colors.danger,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ListItemDeleteAction;