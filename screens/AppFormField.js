import React from 'react'
import {useFormikContext} from 'formik'
import AppTextInput from '../components/AppTextInput'
import ErrorMessage from '../components/ErrorMessage'

export default function AppFormField({name,...otherProps}) {
    const {setFieldTouched,handleChange,errors,touched}=useFormikContext();
    return (
        <>
            <AppTextInput   
                //autoCorrect={false}
                //autoCapitalize='none'
                //keyboardType='email-address'
                //placeholder='Email'
                //textContentType='emailAddress'
                //icon='email'
                //formik will keep track of the email varaible
                {...otherProps}
                onChangeText={handleChange(name)}
                //check if the field is being touched or not->for generate error messages
                onBlur={()=>setFieldTouched(name)}
            />

            {/*generate errors for email filed -> only if it's being touched*/}
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}
