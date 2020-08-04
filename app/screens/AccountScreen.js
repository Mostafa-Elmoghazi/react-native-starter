import React from 'react';
import Screen from '../components/ui/Screen';
import ListItem from '../components/ui/ListItem';
import { StyleSheet, View, FlatList } from 'react-native';

import Icon from './../components/ui/Icon';

import colors from '../config/colors';
import LightSeparator from './../components/ui/LightSeparator';

const items = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Account",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <ListItem
                title="Mostafa Elmoghazi"
                subtitle="mostafa.elmoghazi@gmail.com"
                image={require('../assets/avatar.jpg')}
            />
            <View style={styles.container}>
                <FlatList
                    ItemSeparatorComponent={LightSeparator}
                    data={items}
                    keyExtractor={item => item.title}
                    onPress={() => console.log()}
                    renderItem={
                        ({ item }) => (
                            <ListItem title={item.title} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} size={40} />} />
                        )
                    }
                />
            </View>
            <View style={styles.container}>
                <ListItem
                    title="Log Out"
                    IconComponent={<Icon name="logout" backgroundColor="#5f5f5f" size={40} />}
                />
            </View>
        </Screen>);
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20
    }
})

export default AccountScreen;