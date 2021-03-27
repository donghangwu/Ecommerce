import React from 'react'
import { TouchableOpacity,StyleSheet,Image,View } from 'react-native'
import AppText from './AppText'

export default function AppCard({title,subtitle,image,style}) {
    return (
        <TouchableOpacity style={[styles.card,style]}>
            
            <Image style={styles.imagestyle} 
            source={image}></Image>

            <View style={styles.textStyle}>
                <AppText style={styles.titleStyle}>{
                title}</AppText>
                <AppText style={styles.subtitleStyle} >
                {subtitle}</AppText>
            </View>
            
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    card:{
        
        borderRadius:15,
        backgroundColor:'white',
        marginBottom:20,
        overflow:'hidden',
    },
    imagestyle:{
        width:'100%',
        height:200,
        //resizeMode:'contain'
           
    },
    textStyle:{
        paddingTop:10,
        paddingLeft:20

    },
    titleStyle:{
        marginBottom:5
    },
    subtitleStyle:{
        color:'#99CC66',
        fontWeight:'bold'
    }
})