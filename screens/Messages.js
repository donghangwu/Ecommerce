import React from 'react'
import { FlatList, Platform, SafeAreaView, StatusBar, 
    StyleSheet,View } from 'react-native'
import ListSeparator from '../components/ListSeparator';
import SafeScreen from '../components/SafeScreen';
import UserItem from '../components/UserItem'

const message=[
    {
        id:1,
        title:'T1',
        description:'D1',
        image:require('../assets/maleAvatar.jpg')
    },
    {
        id:2,
        title:'T2',
        description:'D2',
        image:require('../assets/femaleAvatar.jpg')
    },

]
export default function Messages() {
    const renderItem = ({item})=>(
        <UserItem
                title={item.title}
                subtitle={item.description}
                image={item.image} 
                onPress={()=>console.log('Message selected',item)}/>
    );
    return (
        <SafeScreen style={styles.container}>
            <FlatList
                
                data={message}
                //unique key for each element in array
                keyExtractor={message=>message.id.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={()=><ListSeparator/>}
                >
            </FlatList>
        
        </SafeScreen>
        
    )
}

const styles= StyleSheet.create({
  list:{
    backgroundColor: '#f9c2ff',
  },
  container:{
      marginLeft:20
  }

})
