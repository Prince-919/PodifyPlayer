import React, {FC} from 'react';
import colors from '@utils/colors';
import {StyleSheet, SafeAreaView, View, Button} from 'react-native';
import AuthInputField from '@components/AuthInputField';
import {Formik} from 'formik';
import * as yup from 'yup';

const signupSchema = yup.object({
  name: yup
    .string()
    .trim('Name is missing!')
    .min(3, 'Invalid name!')
    .required('Name is required!'),
  email: yup
    .string()
    .trim('Email is missing!')
    .email('Invalid email!')
    .required('Email is required!'),
  password: yup
    .string()
    .trim('Password is missing!')
    .min(8, 'Password is too short!')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[a-zA-Z\d!@#\$%\^&\*]+$/,
      'Password is too simple!',
    )
    .required('Password is required!'),
});

interface Props {}

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUp: FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        onSubmit={values => {
          console.warn(values);
        }}
        initialValues={initialValues}
        validationSchema={signupSchema}>
        {({handleSubmit, handleChange, errors, values}) => {
          return (
            <View style={styles.formContainer}>
              <AuthInputField
                label="Name"
                placeholder="John Doe"
                containerStyle={styles.marginBottom}
                onChange={handleChange('name')}
                value={values.name}
                errorMsg={errors.name}
              />
              <AuthInputField
                label="Email"
                placeholder="john@gmail.com"
                keyboardType="email-address"
                autoCapitalize="none"
                containerStyle={styles.marginBottom}
                onChange={handleChange('email')}
                value={values.email}
                errorMsg={errors.email}
              />
              <AuthInputField
                label="Password"
                placeholder="********"
                autoCapitalize="none"
                secureTextEntry={true}
                containerStyle={styles.marginBottom}
                onChange={handleChange('password')}
                value={values.password}
                errorMsg={errors.password}
              />

              <Button onPress={() => handleSubmit()} title="Sign up" />
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },

  formContainer: {
    width: '100%',
    paddingHorizontal: 15,
  },
  marginBottom: {
    marginBottom: 20,
  },
});

export default SignUp;
