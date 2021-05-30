import {StyleSheet} from 'react-native';
import * as colors from './colors.json';

const styles = StyleSheet.create({
  errorText: {
    margin: 20,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonContent: {
    backgroundColor: 'white',
    aspectRatio: 1,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.tertiary,
  },
});

export default styles;
