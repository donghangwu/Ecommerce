import React from 'react'
import {View, StyleSheet} from 'react-native'

export default function ListSeparator() {
    return (
        <View style={styles.separator}/>
    )
}
const styles= StyleSheet.create({
   
    separator:{
      backgroundColor: 'lightgrey',
      width:'100%',
      height:1
    }
  })
  