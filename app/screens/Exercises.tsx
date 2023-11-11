import { View, ScrollView, Text } from 'react-native';
import React from 'react';
import Widget from '../components/Widget/Widget';
import IconButton from '../components/IconButton/IconButton';
import Ionicons from '@expo/vector-icons/Ionicons';

const Exercises = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: 'black', paddingBottom: 30 }}
      >
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            zIndex: 1,
            fontSize: 17,
            fontWeight: '600',
            marginVertical: 35,
          }}
        >
          Exercises
        </Text>
        <IconButton
          onPress={() => console.log('hello')}
          icon={
            <Ionicons name="add-circle-outline" color={'black'} size={23} />
          }
          buttonColor="#A3F263"
          buttonStyle={{
            position: 'absolute',
            top: 20,
            right: 20,
            zIndex: 1,
            borderRadius: 100,
          }}
        />
        <IconButton
          onPress={() => console.log('hello')}
          icon={<Ionicons name="search" color={'black'} size={23} />}
          buttonColor="#A3F263"
          buttonStyle={{
            position: 'absolute',
            top: 20,
            left: 20,
            zIndex: 1,
            borderRadius: 100,
          }}
        />
        <Widget
          customStyle={{
            marginHorizontal: 20,
            marginVertical: 10,
            backgroundColor: '#FF7B62',
          }}
        />
        <Widget
          customStyle={{
            marginHorizontal: 20,
            marginVertical: 10,
            backgroundColor: '#FF7B62',
          }}
        />
        <Widget
          customStyle={{
            marginHorizontal: 20,
            marginVertical: 10,
            backgroundColor: '#FF7B62',
          }}
        />
        <Widget
          customStyle={{
            marginHorizontal: 20,
            marginVertical: 10,
            backgroundColor: '#FF7B62',
          }}
        />
        <Widget
          customStyle={{
            marginHorizontal: 20,
            marginVertical: 10,
            backgroundColor: '#FF7B62',
          }}
        />
        <Widget
          customStyle={{
            marginHorizontal: 20,
            marginVertical: 10,
            backgroundColor: '#FF7B62',
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Exercises;
