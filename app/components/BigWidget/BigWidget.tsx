import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';
import styles from './BigWidget.style';

interface BigWidgetProps {
  customStyle?: StyleProp<ViewStyle>;
}

const BigWidget = ({ customStyle }: BigWidgetProps) => {
  return <View style={[styles.container, customStyle]}></View>;
};

export default BigWidget;
