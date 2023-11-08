import React, { FC } from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import styles from './IconButton.style';
import { View } from 'react-native';

interface IconButtonProps {
  onPress: () => void;
  buttonColor?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  icon: JSX.Element;
  iconContainerStyle?: StyleProp<ViewStyle>;
}

const IconButton: FC<IconButtonProps> = ({
  onPress,
  buttonColor,
  buttonStyle,
  icon,
  iconContainerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        buttonColor
          ? { backgroundColor: buttonColor }
          : { backgroundColor: '#000' },
        buttonStyle,
      ]}
      onPress={onPress}
    >
      <View style={[styles.iconContainer, iconContainerStyle]}>{icon}</View>
    </TouchableOpacity>
  );
};

export default IconButton;
