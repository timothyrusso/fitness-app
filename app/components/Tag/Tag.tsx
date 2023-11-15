import { StyleProp, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import styles from './Tag.style';

interface TagProps {
  text: string;
  customStyle?: StyleProp<ViewStyle>;
}

const Tag = ({ customStyle, text }: TagProps) => {
  return (
    <View style={[styles.container, customStyle]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Tag;
