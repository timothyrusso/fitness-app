import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  title: {
    position: 'absolute',
    top: 35,
    alignSelf: 'center',
    color: 'black',
    zIndex: 1,
    fontSize: 17,
    fontWeight: '600',
  },
  firstWidget: {
    marginTop: '25%',
    marginHorizontal: 20,
    backgroundColor: '#DFF265',
  },
  secondWidget: {
    marginHorizontal: 20,
    backgroundColor: '#FF7B62',
  },
});

export default styles;
