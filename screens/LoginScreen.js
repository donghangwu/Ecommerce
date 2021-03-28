import React,{useState} from 'react'
import { Text,Image ,StyleSheet,FlatList, Platform,View,TouchableWithoutFeedback, Modal, Button} from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import SafeScreen from '../components/SafeScreen'
import {Formik} from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText'
import ErrorMessage from '../components/ErrorMessage'
import AppFormField from './AppFormField'

//validation
const validationSceme=Yup.object().shape({
    
    email:Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label('Password')
})


export default function LoginScreen() {
    //we dont need those state vairables since we use formik
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    return (
        <SafeScreen style={styles.container}>
            <Image 
            style={styles.logo}
            source={require('../assets/logo.jpg')}/>

            <Formik
                initialValues={{email:'',password:''}}
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
                            keyboardType='email-address'
                            placeholder='Email'
                            textContentType='emailAddress'
                            icon='email'
                            name='email'
                            // //formik will keep track of the email varaible
                            // onChangeText={handleChange('email')}
                            // //check if the field is being touched or not->for generate error messages
                            // onBlur={()=>setFieldTouched('email')}
                        />
                        {/*generate errors for email filed -> only if it's being touched*/}
                        {/* <ErrorMessage error={errors.email} visible={touched.email}/> */}
                        <AppFormField 
                            autoCorrect={false}
                            autoCapitalize='none'
                            keyboardType='email-address'
                            placeholder='Password'
                            textContentType='password'
                            secureTextEntry={true}
                            icon='lock'
                            name='password'
                            // onChangeText={handleChange('password')}
                            // //check if the field is being touched or not->for generate error messages
                            // onBlur={()=>setFieldTouched('password')}
                            />
                    
                        {/* generate errors for password filed
                        <ErrorMessage error={errors.password} visible={touched.password}/> */}
                        <AppButton title='Login' 
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