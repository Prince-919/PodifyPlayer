import React from 'react';
import {View, Text} from 'react-native';

const Test = (props: {name: string}) => {
  return (
    <View>
      <Text>Hello, {props.name}</Text>
    </View>
  );
};

export default Test;
