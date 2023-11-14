import { View, Text } from 'react-native';
import React from 'react';
import Widget from '../components/Widget/Widget';

const ExamplePageSecond = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Second page</Text>
      <Widget />
    </View>
  );
};

export default ExamplePageSecond;
