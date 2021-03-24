import React from 'react';
import { StyleSheet, Text,Image,Alert,Button, View ,
  SafeAreaView, 

} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>


        <View style={{
          //backgroundColor: 'tomato',
          position: 'absolute', 
          top: '5%', 
          left:'10%'
          
        }
        }>
          <MaterialCommunityIcons name='close' color='white' size={40}>

          </MaterialCommunityIcons>
        </View>

        <View style={{
          position: 'absolute',
          top: '5%', 
          right:'10%',
        }
        }>
          <MaterialCommunityIcons name='trash-can-outline' color='white' size={40}>

          </MaterialCommunityIcons>
        </View>
      <Image style={styles.welcomePage}
       source={require('../assets/aa.png')} />    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    //flexDirection:"column",
    //justifyContent: 'space-between',//primary address ->row
    alignItems: 'flex-end',//secondary adress ->colum
    
     
  },

  welcomePage: {
    top:'20%',
    right:'5%',
    width:'90%',
    height:'65%',
    
  },

});
