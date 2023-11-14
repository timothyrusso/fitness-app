import { View } from 'react-native';
import React from 'react';
import { styles } from './Login/Login';
import { LinearGradient } from 'expo-linear-gradient';

const ExamplePage = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#051937', '#004d7a', '#008793', '#00bf72', '#a8eb12']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      ></LinearGradient>
    </View>
  );
};

export default ExamplePage;
