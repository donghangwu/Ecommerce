import React from 'react'
import { Text ,StyleSheet,} from 'react-native'

import AppText from './AppText'

export default function ErrorMessage({error,visible}) {
    if(!visible||!error)
        return null;
    return (
        <AppText style={styles.Error}>
            {error}
        </AppText>
    )
}

const styles= StyleSheet.create({
    Error:{
        color:'red'
      },
   
})