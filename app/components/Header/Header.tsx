import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';
import styles from './Header.style';

interface HeaderProps {
  customStyle?: StyleProp<ViewStyle>;
}

const Header = ({ customStyle }: HeaderProps) => {
  return <View style={[styles.container, customStyle]}></View>;
};

export default Header;
