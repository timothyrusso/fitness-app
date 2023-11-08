import React, { FC } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import styles from './CustomButton.style';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  buttonColor?: string;
  titleColor?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
  children,
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
      <Text
        style={[
          styles.text,
          titleColor ? { color: titleColor } : { color: '#fff' },
          textStyle,
        ]}
      >
        {title}
      </Text>
      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;
