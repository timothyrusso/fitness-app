import React from 'react';
import Widget from '../../../../components/Widget/Widget';
import Tag from '../../../../components/Tag/Tag';
import styles from './ExerciseWidget.style';
import { Text, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface ExerciseWidgetProps {
  navigation: NavigationProp<any, any>;
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const ExerciseWidget = ({
  navigation,
  id,
  title,
  description,
  image,
  tags,
}: ExerciseWidgetProps) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Exercise Page', {
          id,
          title,
          description,
          image,
          tags,
        })
      }
    >
      <Widget customStyle={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        {tags.map((tag) => (
          <Tag key={id + tag} text={tag} customStyle={styles.tag} />
        ))}
      </Widget>
    </TouchableOpacity>
  );
};

export default ExerciseWidget;
