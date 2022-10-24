import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import unit from '../../utils/metrics';

export default StyleSheet.create({
  wrapper: {
    borderRadius: 12 * unit,
  },
  container: {
    width: (Dimensions.get('screen').width - 48 * unit) / 2,
    borderRadius: 12 * unit,
    overflow: 'hidden',
    marginBottom: 16 * unit,
    marginHorizontal: 8 * unit,
    backgroundColor: colors.white,
  },
  preview: {
    alignItems: 'center',
    height: 128 * unit,
    borderTopLeftRadius: 12 * unit,
    borderTopRightRadius: 12 * unit,
    backgroundColor: colors.smoke,
  },
  pdf: {
    flexGrow: 1,
    height: 128 * unit,
    width: (Dimensions.get('screen').width - 64 * unit) / 2,
    backgroundColor: colors.smoke,
  },
  controllers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 52 * unit,
    paddingVertical: 4 * unit,
    paddingHorizontal: 12 * unit,
  },
  text: {
    flex: 1,
    marginEnd: 16 * unit,
  },
});
