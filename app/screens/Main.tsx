import { View, Text, Button } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { styles } from './Login';
import TabMenu from '../components/TabMenu/TabMenu';
import Ionicons from '@expo/vector-icons/Ionicons';
import IconButton from '../components/IconButton/IconButton';

interface MainProps {
  navigation: NavigationProp<any, any>;
}

const Main = ({ navigation }: MainProps) => {
  return (
    <View style={styles.container}>
      <IconButton
        onPress={() => navigation.navigate('Example Page')}
        icon={<Ionicons name="settings-outline" color={'black'} size={20} />}
        buttonColor="trasparent"
        buttonStyle={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}
      />
      <IconButton
        onPress={() => FIREBASE_AUTH.signOut()}
        icon={<Ionicons name="exit-outline" color={'black'} size={20} />}
        buttonColor="trasparent"
        buttonStyle={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}
      />
      <TabMenu />
    </View>
  );
};

export default Main;
