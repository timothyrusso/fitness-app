import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './Login';
import Widget from '../components/Widget/Widget';

const ExamplePageSecond = () => {
  return (
    <View style={styles.container}>
      <Text>Second page</Text>
      <Widget />
    </View>
  );
};

export default ExamplePageSecond;
