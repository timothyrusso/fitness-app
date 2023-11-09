import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './Login';
import IconButton from '../components/IconButton/IconButton';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';

interface ProfileProps {
  navigation: NavigationProp<any, any>;
}

const ProfilePage = ({ navigation }: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
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
    </View>
  );
};

export default ProfilePage;
