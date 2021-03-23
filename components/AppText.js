import React from 'react'
import { Text ,StyleSheet, Platform} from 'react-native'
export default function AppText(props) {
    return (
      <Text
      style={styles.text}>
          {props.children}
      </Text>  
    );
}

const styles= StyleSheet.create({
    text:{
        
        ...Platform.select({
            ios:{
                fontSize:20,
                fontFamily:"Avenir",
                fontStyle:'italic'
        
            },
            android:{
                fontSize:18,
                fontFamily:"Roboto",
            }
        })
    }
})