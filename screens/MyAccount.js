import React from 'react'
import { StyleSheet, Text,Image,Alert,Button, View ,
    SafeAreaView, Platform, TouchableNativeFeedback, 
    TouchableWithoutFeedback, TouchableHighlight,
    Dimensions,FlatList,
  } from 'react-native';
import ItemDeleteArea from '../components/ItemDeleteArea';
import MyIcon from '../components/MyIcon';
import SafeScreen from '../components/SafeScreen';
import UserItem from '../components/UserItem';
import ListSeparator from '../components/ListSeparator'
const menuItem=[
    {
        title:'My Listings',
        icon:{
            name:'format-list-bulleted',
            backgroundColor:'#ff5252'
        }
    },
    {
        title:'My Messages',
        icon:{
            name:'email',
            backgroundColor:'#177cb0'
        }
    }
]

export default function MyAccount() {
    return (

        <SafeScreen style={styles.view}>
            <View style={styles.container}>
                <UserItem title='David Wu' 
                subtitle='davidwu325@yahooc.om'
                image={require('../assets/maleAvatar.jpg')}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                ItemSeparatorComponent={ListSeparator}
                    data={menuItem}
                    keyExtractor={item=>item.title}
                    renderItem={({item})=>

                    <UserItem 
                        title={item.title}
                        IconComponent={
                        <MyIcon name={item.icon.name}
                        backgroundColor={item.icon.backgroundColor}/>}/>
                }/>
                    
                
            </View>
            <UserItem
                title="Log Out"
                IconComponent={
                    <MyIcon name='logout' backgroundColor="#ffe66d"/>
                }/>
            
            
            
        </SafeScreen>
    )
}
const styles= StyleSheet.create({

  view:{
      //paddingLeft:20,
      backgroundColor:'#FEFAF8'
  },
  container:{
      marginVertical:10
  }

})