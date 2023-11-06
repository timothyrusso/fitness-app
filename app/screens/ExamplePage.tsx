import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './Login';
import Widget from '../components/Widget/Widget';

const ExamplePage = () => {
  return (
    <View style={styles.container}>
      <Text>First page</Text>
      <Widget />
      <Widget />
      <Widget />
      <Widget />
      <Widget />
      <Widget />
      <Widget />
      <Widget />
      <Widget />
      <Widget />
      <Widget />
    </View>
  );
};

export default ExamplePage;
