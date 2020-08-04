import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import colors from '../../config/colors';

const Card = ({ title, subtitle, image }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>

        </View>);
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: colors.white,
        overflow: 'hidden',
        marginBottom: 20
    },
    details: {
        padding: 20
    },
    image: {
        height: 200,
        width: '100%'
    },
    title: {
        fontSize: 18,
        color: colors.primary
    },
    subtitle: {
        color: colors.secondary,
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default Card;