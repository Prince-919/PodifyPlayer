import CircleUI from '@ui/CircleUI';
import colors from '@utils/colors';
import React, {FC, ReactNode} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

interface Props {
  children: ReactNode;
  heading?: string;
  subHeading?: string;
}

const AuthFormContainer: FC<Props> = ({children, heading, subHeading}) => {
  return (
    <View style={styles.container}>
      <CircleUI size={200} position="top-left" />
      <CircleUI size={200} position="top-right" />
      <CircleUI size={200} position="bottom-left" />
      <CircleUI size={200} position="bottom-right" />

      <View style={styles.headerContainer}>
        <Image source={require('../assets/logo.png')} />
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.subHeading}>{subHeading}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  heading: {
    color: colors.SECONDARY,
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  subHeading: {
    color: colors.CONTRAST,
    fontSize: 16,
  },
  headerContainer: {width: '100%', marginBottom: 20},
});

export default AuthFormContainer;
