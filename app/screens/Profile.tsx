import { View, Text } from 'react-native';
import React from 'react';
import IconButton from '../components/IconButton/IconButton';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import Widget from '../components/Widget/Widget';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

interface ProfileProps {
  navigation: NavigationProp<any, any>;
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
          icon={
            <Ionicons name="close-circle-outline" color={'black'} size={23} />
          }
          buttonColor="transparent"
          buttonStyle={{
            position: 'absolute',
            top: 20,
            right: 20,
            zIndex: 1,
            borderRadius: 100,
          }}
        />
        <Text
          style={{
            position: 'absolute',
            top: 35,
            alignSelf: 'center',
            color: 'black',
            zIndex: 1,
            fontSize: 17,
            fontWeight: '600',
          }}
        >
          Profile
        </Text>
        <View
          style={{
            alignItems: 'flex-start',
            width: '100%',
            height: '30%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            overflow: 'hidden',
          }}
        >
          <BlurView
            tint="light"
            intensity={40}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <View
          style={{
            width: 130,
            height: 130,
            borderRadius: 100,
            backgroundColor: '#37C3BB',
            position: 'absolute',
            marginTop: '35%',
            alignSelf: 'center',
          }}
        ></View>
        <Widget
          customStyle={{
            marginTop: '25%',
            marginHorizontal: 20,
            backgroundColor: '#DFF265',
          }}
        />
        <Widget
          customStyle={{
            marginHorizontal: 20,
            backgroundColor: '#FF7B62',
          }}
        />
      </LinearGradient>
    </View>
  );
};

export default ProfilePage;
