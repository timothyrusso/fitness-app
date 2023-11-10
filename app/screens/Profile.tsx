import { View, StyleSheet } from 'react-native';
import React from 'react';
import IconButton from '../components/IconButton/IconButton';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import Widget from '../components/Widget/Widget';

interface ProfileProps {
  navigation: NavigationProp<any, any>;
}

const ProfilePage = ({ navigation }: ProfileProps) => {
  return (
    <View style={styles.container}>
      <IconButton
        onPress={() => navigation.navigate('Example Page')}
        icon={<Ionicons name="settings-outline" color={'black'} size={20} />}
        buttonColor="red"
        buttonStyle={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 1,
          borderRadius: 100,
        }}
      />
      <IconButton
        onPress={() => FIREBASE_AUTH.signOut()}
        icon={<Ionicons name="exit-outline" color={'black'} size={20} />}
        buttonColor="red"
        buttonStyle={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 1,
          borderRadius: 100,
        }}
      />
      <View
        style={{
          alignItems: 'flex-start',
          width: '100%',
          height: '30%',
          backgroundColor: 'blue',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      ></View>
      <View
        style={{
          width: 130,
          height: 130,
          borderRadius: 100,
          backgroundColor: 'green',
          position: 'absolute',
          marginTop: '35%',
          alignSelf: 'center',
        }}
      ></View>
      <Widget
        customStyle={{
          marginTop: '25%',
          marginHorizontal: 20,
        }}
      />
      <Widget
        customStyle={{
          marginHorizontal: 20,
        }}
      />
    </View>
  );
};

export default ProfilePage;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
