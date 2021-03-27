import React from 'react'
import { StyleSheet, Text,Image,Alert,Button, View ,
    SafeAreaView, Platform, TouchableNativeFeedback, 
    TouchableWithoutFeedback, TouchableHighlight,
    Dimensions,FlatList,
  } from 'react-native';
import AppCard from '../components/AppCard';
import SafeScreen from '../components/SafeScreen'

const listings=[
    {
        id:1,
        title:'red jacket',
        price:1000,
        image:require('../assets/redJacket.jpg')
    },
    {
        id:2,
        title:'chair in great condition',
        price:100,
        image:require('../assets/chair.jpg')
    },
]
export default function ListingScreen() {
    return (
        <SafeScreen style={styles.container}>
                <FlatList
                    data={listings}
                    keyExtractor={list=>list.id.toString()}
                    renderItem={({item})=>
                    <AppCard title={item.title}
                            subtitle={'$'+item.price}
                            image={item.image}
                            style={styles.card}/>}
                >

                </FlatList>
            
        </SafeScreen>         
        
    )
}

const styles= StyleSheet.create({

    container:{
        backgroundColor:'#FEFAF8',
    },
    card:{
        marginHorizontal:20
    }
    
 
  
  })