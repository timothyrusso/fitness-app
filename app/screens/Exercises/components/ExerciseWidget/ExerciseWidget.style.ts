import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#FF7B62',
    padding: 0,
    overflow: 'hidden',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'flex-end',
    marginHorizontal: 18,
    marginVertical: 18,
  },
  image: {
    width: '55%',
    height: '100%',
    position: 'absolute',
  },
  tag: {
    position: 'absolute',
    bottom: 18,
    right: 18,
  },
});

export default styles;
