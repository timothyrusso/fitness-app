import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';
import styles from './Widget.style';

interface WidgetProps {
  customStyle?: StyleProp<ViewStyle>;
}

const Widget = ({ customStyle }: WidgetProps) => {
  return <View style={[styles.container, customStyle]}></View>;
};

export default Widget;
