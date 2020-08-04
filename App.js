import { StyleSheet, Text, View, ImageBackground, Image, Platform, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ItemListScreen from './app/screens/ItemListScreen';
import ItemDetailsScreen from './app/screens/ItemDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ui/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import Screen from './app/components/ui/Screen';
import AppTextInput from './app/components/ui/AppTextInput';
import AppPicker from './app/components/ui/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import UpsertItemScreen from './app/screens/UpsertItemScreen';
import ImageInput from './app/components/ui/ImageInput';
import ImageInputList from './app/components/ui/ImageInputList';

export default function App() {

  return (
    <UpsertItemScreen />
  );
}

