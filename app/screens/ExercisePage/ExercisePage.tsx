import { Image, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { RouteProp, NavigationProp } from '@react-navigation/native';
import IconButton from '../../components/IconButton/IconButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './ExercisePage.style';
import { RootStackParamList } from '../../navigation/MainPageNavigator';
import Tag from '../../components/Tag/Tag';

interface ExercisePageProps {
  navigation: NavigationProp<RootStackParamList, 'Exercise Page'>;
  route: RouteProp<any, any>;
}

const ExercisePage = ({ navigation, route }: ExercisePageProps) => {
  const { id, title, description, image, tags } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#051937', '#004d7a', '#008793', '#00bf72', '#a8eb12']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <IconButton
          onPress={() => navigation.goBack()}
          icon={
            <Ionicons
              name="arrow-back-circle-outline"
              color={'black'}
              size={23}
            />
          }
          buttonColor="#A3F263"
          buttonStyle={styles.leftIconButton}
        />
        <Text style={styles.title}>{title + ' ' + id}</Text>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <Text style={styles.description}>{description}</Text>
        {tags.map((tag: string) => (
          <Tag customStyle={styles.tags} text={tag} />
        ))}
      </LinearGradient>
    </View>
  );
};

export default ExercisePage;
