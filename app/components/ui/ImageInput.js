import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Alert, TouchableWithoutFeedback } from 'react-native';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const ImageInput = ({ imageUri, onChangeImage }) => {
    const handlePress = () => {
        if (!imageUri)
            selectImage();
        else {
            Alert.alert("Delete", "Are you sure to delete this image?", [
                { text: "Yes", onPress: () => onChangeImage(null) },
                { text: "No" }
            ]);
        }
    }


    const requestPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (!result.granted)
            alert("You should allow camera access permissions.");
    };

    const selectImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5
        });
        if (!result.cancelled)
            onChangeImage(result.uri);
    }

    useEffect(() => {
        requestPermissions();
    }, []);

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons color={colors.medium} size={40} name="camera" />}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 100,
        justifyContent: 'center',
        width: 100,
        backgroundColor: colors.light,
        borderRadius: 15,
        overflow: 'hidden'
    },
    image: {
        width: 100,
        height: 100
    }
});

export default ImageInput;