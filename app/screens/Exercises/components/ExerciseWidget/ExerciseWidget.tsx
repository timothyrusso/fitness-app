import React from 'react';
import Widget from '../../../../components/Widget/Widget';
import Tag from '../../../../components/Tag/Tag';
import styles from './ExerciseWidget.style';
import { Text, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface ExerciseWidgetProps {
  navigation: NavigationProp<any, any>;
  id: number;
}

const ExerciseWidget = ({ navigation, id }: ExerciseWidgetProps) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Exercise Page', { exerciseId: id })}
    >
      <Widget customStyle={styles.container}>
        <Text style={styles.title}>Exercise Title</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
        <Tag text={'Back'} customStyle={styles.tag} />
      </Widget>
    </TouchableOpacity>
  );
};

export default ExerciseWidget;
