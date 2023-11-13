import { View } from 'react-native';
import React from 'react';
import styles from './Main.style';
import TabMenu from '../../components/TabMenu/TabMenu';

const Main = () => {
  return (
    <View style={styles.container}>
      <TabMenu />
    </View>
  );
};

export default Main;
