import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';
import styles from './Avatar.style';

interface AvatarProps {
  customStyle?: StyleProp<ViewStyle>;
}

const Avatar = ({ customStyle }: AvatarProps) => {
  return <View style={[styles.container, customStyle]}></View>;
};

export default Avatar;
