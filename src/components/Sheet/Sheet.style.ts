import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import unit from '../../utils/metrics';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
    borderRadius: 0,
    borderTopRightRadius: 28 * unit,
    borderTopLeftRadius: 28 * unit,
  },
  content: {
    maxHeight: height * 0.9,
    paddingBottom: 6 * unit,
  },
});
