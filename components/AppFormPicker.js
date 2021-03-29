import React,{useState} from 'react'
import { Text ,StyleSheet,FlatList, Platform,View,TouchableWithoutFeedback, Modal, Button} from 'react-native'
import {useFormikContext} from 'formik'
import AppPicker from './AppPicker'
import ErrorMessage from './ErrorMessage';


export default function AppFormPicker({name,items,placeholder}) {
    const {values,setFieldValue,errors,touched}=useFormikContext();

    return (
           <>   
            <AppPicker 
            selectedItem={values[name]}
            onSelectItem={item=>setFieldValue(name,item)}
            items={items}  
            placeholder={placeholder}/>
            <ErrorMessage error={errors[name]} visible={touched[name]}/>

        </>
        
    );
}

const styles= StyleSheet.create({
    container:{
        backgroundColor: '#f8f4f4',
        width:'100%',
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        padding:15,
        marginVertical:15
      },
    text:{
        flex:1,
        marginLeft:10
    }
})