import React, {FC, useState} from 'react';
import colors from '@utils/colors';
import {StyleSheet, SafeAreaView, View, Button} from 'react-native';
import AuthInputField from '@components/AuthInputField';

interface Props {}

const SignUp: FC<Props> = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorInfo, setErrorInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <AuthInputField
          label="Name"
          placeholder="John Doe"
          containerStyle={styles.marginBottom}
          onChange={text => {
            setUserInfo({...userInfo, name: text});
          }}
          errorMsg={errorInfo.name}
        />
        <AuthInputField
          label="Email"
          placeholder="john@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          containerStyle={styles.marginBottom}
          onChange={text => {
            setUserInfo({...userInfo, email: text});
          }}
          errorMsg={errorInfo.email}
        />
        <AuthInputField
          label="Password"
          placeholder="********"
          autoCapitalize="none"
          secureTextEntry={true}
          containerStyle={styles.marginBottom}
          onChange={text => {
            setUserInfo({...userInfo, password: text});
          }}
          errorMsg={errorInfo.password}
        />

        <Button
          onPress={() => {
            if (!userInfo.name) {
              return setErrorInfo({
                email: '',
                password: '',
                name: 'Name is missing!',
              });
            }

            if (!userInfo.email) {
              return setErrorInfo({
                name: '',
                password: '',
                email: 'Email is missing!',
              });
            }
            if (!userInfo.password) {
              return setErrorInfo({
                name: '',
                email: '',
                password: 'Password is missing!',
              });
            }

            setErrorInfo({
              name: '',
              email: '',
              password: '',
            });
            console.log(userInfo);
          }}
          title="Sign up"
        />
      </View>
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
