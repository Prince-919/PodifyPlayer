import React, {FC, useState} from 'react';
import colors from '@utils/colors';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';
import AuthInputField from '@components/AuthInputField';

interface Props {}

const SignUp: FC<Props> = () => {
  const [userInfo, setUserInfo] = useState({
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
        />

        <Button onPress={() => console.log(userInfo)} title="Sign up" />
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
