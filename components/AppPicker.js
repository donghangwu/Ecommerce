import React,{useState} from 'react'
import { Text ,StyleSheet,FlatList, Platform,View,TouchableWithoutFeedback, Modal, Button} from 'react-native'
import {  } from 'react-native-gesture-handler'
import AppText from './AppText'
import MyIcon from './MyIcon'
import PickerItem from './PickerItem'
import SafeScreen from './SafeScreen'


export default function AppPicker({icon,items,placeholder,onSelectItem,selectedItem}) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
           <>   
            <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>

                <View style={[styles.container]}>
                    {icon && <MyIcon
                    size={30}
                    name = {icon}/>}
                <AppText style={styles.text}>
                    {selectedItem?selectedItem.label: placeholder}
                    </AppText>

                <MyIcon
                    size={30}
                    name = {'chevron-down'}
                    //iconColor={"#6e6969"}
                    //backgroundColor={'#f8f4f4'}
                    />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType="slide">
                <SafeScreen >  
                <Button title="Close" onPress={()=>setModalVisible(false)}/>
                <FlatList data={items}
                    keyExtractor={item=>item.value.toString()}
                    renderItem={({item})=>
                    <PickerItem
                        label={item.label}
                        onPress={()=>{
                            setModalVisible(false)
                            onSelectItem(item)}}/>}/>
                </SafeScreen>
            </Modal>
        </>
        
    );
}

const styles= StyleSheet.create({
    container:{
        backgroundColor: '#f8f4f4',
        width:'100%',
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        padding:15,
        marginVertical:15
      },
    text:{
        flex:1,
        marginLeft:10
    },
    dropbox:{
        flex:0.5,
        position:'absolute',
        top:'50%'
    }

})