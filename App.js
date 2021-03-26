import React from 'react';
import { StyleSheet, Text,Image,Alert,Button, View ,
  SafeAreaView, Platform, TouchableNativeFeedback, 
  TouchableWithoutFeedback, TouchableHighlight,
  Dimensions,


} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import Welcome from './screens/WelcomePage'
import ViewImage from './screens/ViewImagePage'
import AppText from './components/AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from './components/AppButton.js'
import AppCard from './components/AppCard';
import DetailsScreen from './screens/DetailsScreen';
import Messages from './screens/Messages';
import MyAccount from './screens/MyAccount';

export default function App() {
  const name=require('./assets/aa.png')
  console.log(name)
  return (

      <MyAccount/>

   
  );
}




