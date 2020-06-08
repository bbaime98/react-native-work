import React from 'react';
import { View,TextInput, Button, Text} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../components/button';

const reviewSchema = yup.object({
    email: yup.string().required().min(4),
    message: yup.string().required().min(5),
})

export default function ReviewFor () {
    return(
        <View style={globalStyles.container}>
            <View>

        <Formik
        validationSchema={reviewSchema}
        initialValues={ {email: '', message: '', }}
        onSubmit = { (values, actions) => {
            actions.resetForm()
            // addReview(values)
            
        }} 
        >
        { props =>(
                <View>
                    <TextInput
                    style={[{...globalStyles.input}, {marginTop: 100}]}
                    placeholder='Enter your email..'
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                    onBlur={props.handleBlur('email')}
                    />
                    <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>
                    <TextInput
                    multiline minHeight= {60}
                    style={globalStyles.input}
                    placeholder='Enter message..'
                    onChangeText={props.handleChange('message')}
                    value={props.values.message}
                    onBlur={props.handleBlur('message')}
                    />

                    <Text style={globalStyles.errorText}>{props.touched.message && props.errors.message}</Text>


                    <FlatButton text= 'Send' onPress={props.handleSubmit} />
                </View>
            )
        }
        </Formik>
        </View>
        </View>
    )

}
