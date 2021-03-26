import React from 'react'
import { View,StyleSheet,Image, TouchableHighlight } from 'react-native'
import AppText from './AppText'

export default function UserItem(props) {
    return (
        //layout row->defult is column layout
        <TouchableHighlight 
            underlayColor={'lightgrey'}
            onPress={props.onPress}>
            <View style={[styles.container,props.style]}>
                <Image style={styles.image}
                source={props.image}></Image>

                {/* layout column  */}
                <View style={styles.text}>
                    <AppText style={styles.title}>
                        {props.title}</AppText>
                    <AppText style={styles.subtitle}>
                        {props.subtitle}</AppText>
                </View>
            
        </View>
        </TouchableHighlight>
        
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
        marginRight:10,
        //marginTop:10
    },
    text:{
        marginRight:15,
        marginTop:5,
    },
    title:{
        fontWeight:'500'
    },
    subtitle:{
        fontSize:15,
        color:'#6e6969'
    }
})