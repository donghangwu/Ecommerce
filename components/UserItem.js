import React from 'react'
import { View,StyleSheet,Image } from 'react-native'
import AppText from './AppText'

export default function UserItem(props) {
    return (
        //layout row->defult is column layout
        <View style={styles.container}>
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
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        marginVertical:40
    },
    image:{
        height:70,
        width:70,
        borderRadius:35,
        marginRight:10,
        marginTop:20
    },
    text:{
        marginRight:15,
        marginTop:30,
    },
    title:{
        fontWeight:'500'
    },
    subtitle:{
        fontSize:15,
        color:'#6e6969'
    }
})