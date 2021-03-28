import React from 'react'
import {View, StyleSheet, TextInput, Platform} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import MyIcon from './MyIcon'
import defaultStyle from '../config/styles'

export default function AppTextInput({icon,style,...otherProps}) {
    return (
        <View style={[styles.container]}>
            {icon && <MyIcon
            name = {icon}/>}
            <TextInput 
            {...otherProps}
            style={[defaultStyle.text,styles.textinput]}/>
        </View>
    )
}
const styles= StyleSheet.create({
   
    container:{
      backgroundColor: '#f8f4f4',
      width:'100%',
      borderRadius:15,
      flexDirection:'row',
      padding:15,
      marginVertical:15
    },
    textinput:{
        width:'100%',
        height:'100%',
        marginHorizontal:10,
    }
})
  