import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import unit from '../../utils/metrics';

export default StyleSheet.create({
  trigger: {
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 32 * unit,
    paddingVertical: 16 * unit,
    paddingHorizontal: 32 * unit,
    backgroundColor: colors.main,
  },
  icon: {
    marginStart: 16 * unit,
    marginBottom: 2 * unit,
  },
});
