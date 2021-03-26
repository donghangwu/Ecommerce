import React from 'react'
import { View,StyleSheet,Image, TouchableHighlight } from 'react-native'
import AppText from './AppText'
import {Swipeable} from 'react-native-gesture-handler'
export default function UserItem(props) {
    return (
        //layout row->defult is column layout
        <Swipeable renderRightActions={props.renderRightActions}>        
        <TouchableHighlight 
            underlayColor={'#f8f4f4'}
            onPress={props.onPress}>
            <View style={[styles.container,props.style]}>

                {/* chose to render icon or image not both */}
                {props.IconComponent}
                {props.image&&<Image style={styles.image} source={props.image}/>}

                {/* layout column  */}
                <View style={styles.text}>
                    <AppText style={styles.title}>
                        {props.title}</AppText>
                    {props.subtitle&&<AppText style={styles.subtitle}>
                        {props.subtitle}</AppText>}
                </View>
            
        </View>
        </TouchableHighlight>
        </Swipeable>
        
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
       // marginBottom:10,
        paddingVertical:15
    },
    image:{
        height:70,
        width:70,
        borderRadius:35,
        
        //marginTop:10
    },
    text:{
        justifyContent:'center',
        marginLeft:10
    },
    title:{
        fontWeight:'500'
    },
    subtitle:{
        fontSize:15,
        color:'#6e6969'
    }
})