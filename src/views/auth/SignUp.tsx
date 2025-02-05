import React, {FC} from 'react';
import colors from '@utils/colors';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import AppInput from '@ui/AppInput';

interface Props {}

const SignUp: FC<Props> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name</Text>
        <AppInput placeholder="John Doe" />
        <Text style={styles.label}>Email</Text>
        <AppInput
          placeholder="john@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
        <AppInput
          placeholder="********"
          autoCapitalize="none"
          secureTextEntry
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
  input: {
    borderWidth: 2,
    borderColor: colors.SECONDARY,
    height: 45,
    borderRadius: 25,
    color: colors.CONTRAST,
    padding: 10,
  },
  label: {
    color: colors.CONTRAST,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 15,
  },
});

export default SignUp;
