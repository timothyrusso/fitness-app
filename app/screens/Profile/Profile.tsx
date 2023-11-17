import { View, Text } from 'react-native';
import React from 'react';
import IconButton from '../../components/IconButton/IconButton';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import Widget from '../../components/Widget/Widget';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Profile.style';
import Header from '../../components/Header/Header';
import Avatar from '../../components/Avatar/Avatar';
import { RootStackParamList } from '../../navigation/MainPageNavigator';

interface ProfileProps {
  navigation: NavigationProp<RootStackParamList, 'Profile Page'>;
}

const ProfilePage = ({ navigation }: ProfileProps) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#051937', '#004d7a', '#008793', '#00bf72', '#a8eb12']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <IconButton
          onPress={() => navigation.navigate('Example Page')}
          icon={<Ionicons name="settings-outline" color={'black'} size={22} />}
          buttonColor="transparent"
          buttonStyle={styles.leftIconButton}
        />
        <IconButton
          onPress={() => FIREBASE_AUTH.signOut()}
          icon={
            <Ionicons name="close-circle-outline" color={'black'} size={23} />
          }
          buttonColor="transparent"
          buttonStyle={styles.rightIconButton}
        />
        <Text style={styles.title}>Profile</Text>
        <Header />
        <Avatar />
        <Widget customStyle={styles.firstWidget} />
        <Widget customStyle={styles.secondWidget} />
      </LinearGradient>
    </View>
  );
};

export default ProfilePage;
