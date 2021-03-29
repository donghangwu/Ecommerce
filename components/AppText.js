import React from 'react'
import { Text ,StyleSheet, Platform} from 'react-native'
import defaultStyle from '../config/styles'

export default function AppText({children,style,...otherProps}) {
    return (
      <Text
      {...otherProps}
      style={[defaultStyle.text,style]}>
          {children}
      </Text>  
    );
}

const styles= StyleSheet.create({
    text:{
        fontSize:18,
        ...Platform.select({
            ios:{
                
                fontFamily:"Avenir",
                //fontStyle:'italic'
        
            },
            android:{
                
                fontFamily:"Roboto",
            }
        })
    }
})