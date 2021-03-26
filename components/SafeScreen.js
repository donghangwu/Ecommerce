import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'

export default function SafeScreen(props) {
    return (
        <SafeAreaView style={[styles.screen,props.style]}>
            {props.children}
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    screen:{
        paddingTop:Platform.OS=='android'? StatusBar.currentHeight :0
    }
})