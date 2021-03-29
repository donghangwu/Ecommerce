import React from 'react'
import { Text,Image ,StyleSheet,FlatList, Platform,View,TouchableWithoutFeedback, Modal, Button} from 'react-native'

import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import SafeScreen from '../components/SafeScreen'
import {Formik} from 'formik'
import * as Yup from 'yup'
import AppFormField from './AppFormField'
import AppFormPicker from '../components/AppFormPicker'


//validation
const validationSceme=Yup.object().shape({
    
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
})

const categories=[
    {
      label:'Furniture',value:1
    },
    {
      label:'Clothing',value:2
    },
    {
      label:'Cameras',value:3
    },
  ]

export default function ListingEditScreen() {
    return (
        <SafeScreen style={styles.container}>
        <Formik
            initialValues={{title:'',price:'',description:'',category:null}}
            //onSubmis is when appbutton being pressed->handleSubmit
            onSubmit={(value)=>console.log(value)}
            validationSchema={validationSceme}
            >
            {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>(
                //jsx expression
                <>
                    <AppFormField   
                        autoCorrect={false}
                        autoCapitalize='none'
                        placeholder='Title'
                        name='title'
                        maxLength={255}
                    />
                    {/*generate errors for title filed -> only if it's being touched*/}
                    {/* <ErrorMessage error={errors.email} visible={touched.email}/> */}
                    <AppFormField 
                        maxLength={9}
                        keyboardType='numeric'
                        placeholder='Price'
                        name='price'
                        />

                    <AppFormPicker 
                        items={categories}
                        placeholder='Category'
                        name='category'
                        />


                    <AppFormField 
                        maxLength={255}
                        numberOfLines={4}
                        placeholder='Description'
                        name='description'
                        />                     


                    <AppButton title='Submit' 
                        color='#fc5c65' 
                        onPress={handleSubmit}>
                    </AppButton>
                </>
            )}
        </Formik>

    </SafeScreen>
    )
}
const styles= StyleSheet.create({
    container:{
        padding:10
      },
    text:{
        flex:1,
        marginLeft:10
    },
    logo:{
        borderRadius:40,
        width:80,
        height:80,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20
    }
})