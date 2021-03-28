import React from 'react'
import { View ,StyleSheet,Text, TouchableOpacity} from 'react-native'

export default function AppButton(props) {
    //this.props.color='dodgerblue'
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:props.color?props.color:'dodgerblue'}]}
        onPress={props.onPress}>
            <Text style={styles.text}>
                {props.title}
            </Text>
                
        </TouchableOpacity>
        
    );

}

const styles = StyleSheet.create({

    button:{
        backgroundColor: 'dodgerblue',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        width:'100%',

    },
    text:{
        color:'white',
        fontSize: 18,
        textTransform:'capitalize',
        fontWeight:'bold'
    }

})