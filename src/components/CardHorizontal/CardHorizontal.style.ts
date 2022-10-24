import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import unit from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 12 * unit,
    marginBottom: 16 * unit,
    marginHorizontal: 8 * unit,
    paddingHorizontal: 16 * unit,
    backgroundColor: colors.white,
  },
  preview: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: 72 * unit,
    height: 72 * unit,
    marginEnd: 16 * unit,
    backgroundColor: colors.smoke,
  },
  pdf: {
    width: 72 * unit,
    height: 72 * unit,
    backgroundColor: colors.smoke,
  },
  controllers: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    marginEnd: 16 * unit,
  },
});
