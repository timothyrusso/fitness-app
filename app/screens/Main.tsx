import { View, Text, Button } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { styles } from './Login';
import CustomButton from '../components/CustomButton/CustomButton';
import TabMenu from '../components/TabMenu/TabMenu';

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
      <TabMenu />
    </View>
  );
};

export default Main;
