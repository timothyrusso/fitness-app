import { View, ScrollView, Text } from 'react-native';
import React from 'react';
import IconButton from '../../components/IconButton/IconButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import BigWidget from '../../components/BigWidget/BigWidget';
import styles from './Workouts.style';

const Workouts = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: 'black', paddingBottom: 30 }}
      >
        <Text style={styles.title}>Workouts</Text>
        <IconButton
          onPress={() => console.log('hello')}
          icon={
            <Ionicons name="add-circle-outline" color={'black'} size={23} />
          }
          buttonColor="#A3F263"
          buttonStyle={styles.rightIconButton}
        />
        <IconButton
          onPress={() => console.log('hello')}
          icon={<Ionicons name="search" color={'black'} size={23} />}
          buttonColor="#A3F263"
          buttonStyle={styles.leftIconButton}
        />
        <BigWidget customStyle={styles.bigWidget} />
        <BigWidget customStyle={styles.bigWidget} />
        <BigWidget customStyle={styles.bigWidget} />
      </ScrollView>
    </View>
  );
};

export default Workouts;
