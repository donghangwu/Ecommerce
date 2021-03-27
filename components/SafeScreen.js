import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

export default function SafeScreen(props) {
    return (
        <SafeAreaView style={[styles.screen,props.style]}>
            <View style={[styles.screen,props.style]}>
                {props.children}
            </View>
            
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    screen:{
        flex:1,
        paddingTop:Platform.OS=='android'? StatusBar.currentHeight :0,
        
    }
})