import React from 'react';
import Screen from './../components/ui/Screen';
import { Image, StyleSheet, Text } from 'react-native';
import AppTextInput from '../components/ui/AppTextInput';
import AppButton from '../components/ui/AppButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppFormField from './../components/ui/AppFormField';
import AppForm from './../components/ui/AppForm';
import SubmitButton from '../components/ui/SubmitButton';

const LoginScreen = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password")
    })

    return (
        <Screen style={styles.container}>
            <Image resizeMode="contain" style={styles.logo} source={require('../assets/buy-logo.png')} />

            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    placeholder="Email"
                    icon="email"
                    name="email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <AppFormField
                    placeholder="Password"
                    icon="lock"
                    name="password"
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        marginTop: 80,
        marginBottom: 40
    },
    error: {
        color: 'red'
    }
})
export default LoginScreen;