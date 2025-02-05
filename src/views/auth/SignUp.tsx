import React, {FC} from 'react';
import colors from '@utils/colors';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import AuthInputField from '@components/form/AuthInputField';
import * as yup from 'yup';
import Form from '@components/form';
import SubmitBtn from '@components/form/SubmitBtn';

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
      <Form
        onSubmit={values => {
          console.warn(values);
        }}
        initialValues={initialValues}
        validationSchema={signupSchema}>
        <View style={styles.formContainer}>
          <AuthInputField
            name="name"
            label="Name"
            placeholder="John Doe"
            containerStyle={styles.marginBottom}
          />
          <AuthInputField
            name="email"
            label="Email"
            placeholder="john@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={styles.marginBottom}
          />
          <AuthInputField
            name="password"
            label="Password"
            placeholder="********"
            autoCapitalize="none"
            secureTextEntry={true}
            containerStyle={styles.marginBottom}
          />

          <SubmitBtn title="Sign up" />
        </View>
      </Form>
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
