import React from 'react';
import { StyleSheet, Text,Image,Alert,Button, View ,
  SafeAreaView, 

} from 'react-native';
export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>


        <View style={{
          backgroundColor: 'tomato',
          width:55,
          height:55,
          position: 'absolute', 
          top: '5%', 
          left:'10%'
          
        }
        }/>
        <View style={{
          backgroundColor: 'dodgerblue',
          width:55,
          height:55,
          position: 'absolute',
          top: '5%', 
          right:'10%',
        }
        }/>
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
