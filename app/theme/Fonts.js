import {StyleSheet} from 'react-native';

const size = {
  h1: 20,
  h2: 18,
  h3: 14,
  h4: 12,
  input: 14,
  regular: 18,
  medium: 14,
  small: 12,
};

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  normal: {
    fontSize: size.regular,
  },
});