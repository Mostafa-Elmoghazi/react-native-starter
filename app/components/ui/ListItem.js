import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import colors from '../../config/colors';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ListItem = ({ title, subtitle, image, IconComponent, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.details}>
                        <Text style={styles.title}>{title}</Text>
                        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },
    image: {
        borderRadius: 50,
        width: 70,
        height: 70
    },
    details: {
        flexDirection: "column",
        paddingLeft: 20,
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: "500"
    },
    subtitle: {
        fontSize: 14,
        color: colors.medium
    },
    arrow: {
        width: 20,
        height: '100%',
        backgroundColor: '#ffddaa',
        justifyContent: 'flex-end'
    }
})

export default ListItem;