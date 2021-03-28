import React from 'react'
import { Text ,StyleSheet, View} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
export default function MyIcon({
    name,size=30,
    backgroundColor='black',
    iconColor='white'}) 
{
    return (
        <View style={{
            width:size,
            height:size,
            borderRadius:size/2,
            backgroundColor:backgroundColor,
            justifyContent:'center',
            alignItems:'center',

        }}>
            <MaterialCommunityIcons
            name={name}
            color={iconColor}
            size={size/2}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        backgroundColor: '#f9c2ff',
    },
    view:{
        paddingLeft:10
    }

})