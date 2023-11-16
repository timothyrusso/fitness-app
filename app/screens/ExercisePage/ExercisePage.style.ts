import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  leftIconButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    borderRadius: 100,
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    zIndex: 1,
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 35,
  },
  image: {
    width: '100%',
    height: '40%',
    alignSelf: 'center',
  },
  description: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    marginTop: 30,
    backgroundColor: 'grey',
    borderRadius: 20,
    width: '80%',
    height: '30%',
    padding: 10,
    textAlign: 'center',
  },
});

export default styles;
