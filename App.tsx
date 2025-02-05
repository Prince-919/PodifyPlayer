import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Test from './src/components/Test';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Namaste React</Text>
      <Test name="Prince" />
    </SafeAreaView>
  );
};

export default App;
