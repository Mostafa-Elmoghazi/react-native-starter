import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Screen from './Screen';
import PickerItem from './PickerItem';
import LightSeparator from './LightSeparator';



const AppPicker = ({ icon, items, placeholder, onSelectItem, selectedItem }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    <MaterialCommunityIcons name={icon} size={25} color={colors.inputIcon} style={styles.icon} />
                    <Text style={styles.textInput}>{selectedItem ? selectedItem.label : placeholder}</Text>
                    <MaterialCommunityIcons name="chevron-down" size={25} color={colors.inputIcon} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        ItemSeparatorComponent={LightSeparator}
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                isSelected={selectedItem && item.value === selectedItem.value}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
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
        fontSize: 18,
        flex: 1
    }
});

export default AppPicker;