import React,{useState} from 'react';
import { StyleSheet, Text,Image,Alert,Button, View ,
  SafeAreaView, Platform, TouchableNativeFeedback, 
  TouchableWithoutFeedback, TouchableHighlight,
  Dimensions,
  TextInput,
  Switch,


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
import ListingScreen from './screens/ListingScreen';
import SafeScreen from './components/SafeScreen';
import AppTextInput from './components/AppTextInput';
import AppPicker from './components/AppPicker';
import LoginScreen from './screens/LoginScreen';

const categories=[
  {
    label:'Furniture',value:1
  },
  {
    label:'Clothing',value:2
  },
  {
    label:'Cameras',value:3
  },
]
export default function App() {
  const [isNew, setIsNew] = useState(false) 
  const [firstName, setFirstName] = useState('');
  const [category, setCategory] = useState()
  return (

      // <SafeScreen>
      //  <AppPicker 
      //  selectedItem={category}
      //  onSelectItem={item=>setCategory(item)}
      //  items={categories} icon='apps' placeholder='Category'/>
      //  <AppTextInput icon='email'placeholder='Email'/>
      // </SafeScreen>
      <LoginScreen/> 
   
  );
}




