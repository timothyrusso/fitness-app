import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';
import styles from './Widget.style';

interface WidgetProps {
  customStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const Widget = ({ customStyle, children }: WidgetProps) => {
  return <View style={[styles.container, customStyle]}>{children}</View>;
};

export default Widget;
