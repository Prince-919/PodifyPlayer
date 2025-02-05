import React, {FC} from 'react';
import colors from '@utils/colors';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import AuthInputField from '@components/AuthInputField';

interface Props {}

const SignUp: FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <AuthInputField
          label="Name"
          placeholder="John Doe"
          containerStyle={styles.marginBottom}
        />
        <AuthInputField
          label="Email"
          placeholder="john@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          containerStyle={styles.marginBottom}
        />
        <AuthInputField
          label="Password"
          placeholder="********"
          autoCapitalize="none"
          secureTextEntry={true}
          containerStyle={styles.marginBottom}
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
