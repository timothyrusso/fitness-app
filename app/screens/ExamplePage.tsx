import { Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { RouteProp } from '@react-navigation/native';

interface ExamplePageProps {
  route: RouteProp<any, any>;
}

const ExamplePage = ({ route }: ExamplePageProps) => {
  const { exerciseId } = route.params;
  console.log(exerciseId);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#051937', '#004d7a', '#008793', '#00bf72', '#a8eb12']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={{ color: 'white' }}>{exerciseId}</Text>
      </LinearGradient>
    </View>
  );
};

export default ExamplePage;
