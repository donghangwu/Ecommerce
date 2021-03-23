import React from 'react';
import { StyleSheet, Text,Image,Alert,Button, View ,
  SafeAreaView, Platform, TouchableNativeFeedback, 
  TouchableWithoutFeedback, TouchableHighlight,
  Dimensions,


} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import AppButton from '../components/AppButton';
export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.slogan}>Let People Trade</Text>
      <Image style={styles.welcomePage}
       source={require('../assets/welcome.png')} />
      
      

      <View style={styles.login}>
        <AppButton title='login'  color='tomato'/> 
      </View>
      <View style={styles.signup}>
        <AppButton title='signup' color='green'/>
      </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //paddingTop:'20%',
    flex: 1,
    backgroundColor: '#Eee9e4',
    // /paddingTop: Platform.OS==="android" ? 20:0,
    flexDirection:"column",
    //justifyContent: 'space-between',//primary address ->row
    alignItems: 'center',//secondary adress ->colum
    //flexWrap:'wrap'
    
     
  },
  welcomePage: {
    top:'9.5%',
    width:'100%',
    height:'70%',
    
  },
  slogan:{
    fontSize:25,
    position:'absolute',
    top:'5%',
    fontWeight:'bold'
  
  },

  login:{
    width:'100%',
    position: 'absolute', 
    bottom: 55,
  },
  signup:{
    width:'100%',
    position: 'absolute', 
    bottom: 0,
  }
});
