import React from 'react'
import { FlatList, Platform, SafeAreaView, StatusBar, 
    StyleSheet,View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function ItemDeleteArea(props) {
    return (
        <TouchableWithoutFeedback
        style={[styles.container,props.style]}
            onPress={props.onPress}>
            <View >
                <MaterialCommunityIcons
                name='trash-can'
                size={40}
                color={'white'}/>
            </View>
        </TouchableWithoutFeedback>
        
    )
}
const styles=StyleSheet.create({
   container:{
    backgroundColor:'#ff5252',
    width:70,
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
}
})