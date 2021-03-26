import React from 'react'
import { StyleSheet, Text,Image,Alert,Button, View ,
    SafeAreaView, Platform, TouchableNativeFeedback, 
    TouchableWithoutFeedback, TouchableHighlight,
    Dimensions,
  } from 'react-native';
import MyIcon from '../components/MyIcon';
import SafeScreen from '../components/SafeScreen';
import UserItem from '../components/UserItem';
export default function MyAccount() {
    return (
        <SafeScreen style={styles.view}>
            <UserItem title='David Wu' 
            subtitle='Davids account'
            IconComponent={<MyIcon
                name='email'
                size={50}
                iconColor="white"
                backgroundColor='red'
                />}/>
            
            
        </SafeScreen>
    )
}
const styles= StyleSheet.create({

  view:{
      margin:10
  }

})