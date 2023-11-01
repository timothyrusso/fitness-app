import { View, Text, Button } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { styles } from './Login';
import CustomButton from '../components/CustomButton/CustomButton';

interface MainProps {
  navigation: NavigationProp<any, any>;
}

const Main = ({ navigation }: MainProps) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Example Page')}
        title="Open Page"
      />
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
      <CustomButton
        buttonColor="transparent"
        titleColor="#000"
        title="CANCEL"
        buttonStyle={{
          width: '40%',
          alignSelf: 'center',
          borderWidth: 1,
          borderColor: '#1c1c1c',
          borderRadius: 6,
        }}
        textStyle={{ fontSize: 20 }}
        onPress={() => console.log('I am the fourth button')}
      />
    </View>
  );
};

export default Main;
