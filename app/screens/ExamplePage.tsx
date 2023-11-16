import { View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const ExamplePage = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#051937', '#004d7a', '#008793', '#00bf72', '#a8eb12']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      ></LinearGradient>
    </View>
  );
};

export default ExamplePage;
