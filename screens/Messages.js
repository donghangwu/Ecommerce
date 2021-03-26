import React,{useState} from 'react'
import { FlatList, Platform, SafeAreaView, StatusBar, 
    StyleSheet,View } from 'react-native'
import ItemDeleteArea from '../components/ItemDeleteArea';
import ListSeparator from '../components/ListSeparator';
import SafeScreen from '../components/SafeScreen';
import UserItem from '../components/UserItem'

// const messages=[
    

// ]


export default function Messages() {
    const [refresh, setRefresh] = useState(false)
    const [messages, setMessages] = useState([
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
    }])

    const deleteMessage=message=>{
        //delete the message from messages ->current state
        const newMessages=messages.filter(m=>m.id!==message.id)
        setMessages(newMessages)
        //delete message from the server side
    }
    const renderItem = ({item})=>(
        <UserItem
                title={item.title}
                subtitle={item.description}
                image={item.image} 
                onPress={()=>console.log('Message selected',item)}
                renderRightActions={()=>
                    <ItemDeleteArea onPress={()=>deleteMessage(item)}/>}/>
    );
    return (
        <SafeScreen>        
            <FlatList
                style={styles.view}
                data={messages}
                //unique key for each element in array
                keyExtractor={message=>message.id.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={()=><ListSeparator/>}
                refreshing={refresh}
                onRefresh={()=>{
                    setMessages([{
                        id:1,
                        title:'refreshed1',
                        description:'D1refreshed1',
                        image:require('../assets/maleAvatar.jpg')
                    },
                    {
                        id:2,
                        title:'Refreshed2',
                        description:'D2Refreshed2',
                        image:require('../assets/femaleAvatar.jpg')
                    }])
                }}
                >
            </FlatList>

        </SafeScreen>
        
    )
}

const styles= StyleSheet.create({
  list:{
    backgroundColor: '#f9c2ff',
  },
  view:{
      paddingLeft:10
  }

})
