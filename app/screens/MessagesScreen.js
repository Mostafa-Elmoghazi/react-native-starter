import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Screen from './../components/ui/Screen';
import ListItem from './../components/ui/ListItem';
import ListItemDeleteAction from './../components/ui/ListItemDeleteAction';
import LightSeparator from './../components/ui/LightSeparator';

const initialMessages = [
    {
        id: 1,
        title: "Message 1",
        description: "Description 1",
        image: require('../assets/avatar.jpg')
    },
    {
        id: 2,
        title: "Message 2",
        description: "Description 2",
        image: require('../assets/avatar.jpg')
    },
    {
        id: 3,
        title: "Message 3",
        description: "Description 3",
        image: require('../assets/avatar.jpg')
    }
];

const MessagesScreen = (props) => {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDeleteMessage = (message) => {
        setMessages(messages.filter(m => m.id !== message.id));
    }
    return (
        <Screen>
            <FlatList
                ItemSeparatorComponent={LightSeparator}
                data={messages}
                keyExtractor={message => message.id.toString()}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        ...messages,
                        {
                            id: messages.length + 1,
                            title: "Message " + (messages.length + 1),
                            description: "Description " + (messages.length + 1),
                            image: require('../assets/avatar.jpg')
                        }
                    ])
                }}
                renderItem={({ item, index, separator }) => (
                    <ListItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log()}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDeleteMessage(item)} />} />
                )
                } />
        </Screen>
    );
}

const styles = StyleSheet.create({

});

export default MessagesScreen;