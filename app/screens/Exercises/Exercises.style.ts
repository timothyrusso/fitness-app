import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    color: 'white',
    zIndex: 1,
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 35,
  },
  leftIconButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    borderRadius: 100,
  },
  rightIconButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
    borderRadius: 100,
  },
});

export default styles;
