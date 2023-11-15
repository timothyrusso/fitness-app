import { View, ScrollView, Text } from 'react-native';
import React from 'react';
import ExerciseWidget from './components/ExerciseWidget/ExerciseWidget';
import IconButton from '../../components/IconButton/IconButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './Exercises.style';
import { getExerciseList } from './service';

const exercisesList = getExerciseList().map((exercise) => (
  <ExerciseWidget key={exercise.id} />
));

const Exercises = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: 'black', paddingBottom: 30 }}
      >
        <Text style={styles.title}>Exercises</Text>
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
        {exercisesList}
      </ScrollView>
    </View>
  );
};

export default Exercises;
