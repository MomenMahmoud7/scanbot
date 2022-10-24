import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import unit from '../../utils/metrics';

export default StyleSheet.create({
  controllers: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 24 * unit,
    paddingHorizontal: 24 * unit,
  },
  preview: {
    marginTop: 24 * unit,
    paddingVertical: 8 * unit,
    backgroundColor: colors.smoke,
  },
  pdf: {
    flexGrow: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('screen').height * 0.45,
    backgroundColor: colors.smoke,
  },
  input: {
    fontSize: 16 * unit,
    color: colors.black,
    borderWidth: 1 * unit,
    borderColor: 'lightgray',
    borderRadius: 8 * unit,
    marginVertical: 16 * unit,
    paddingVertical: 16 * unit,
    marginHorizontal: 32 * unit,
    paddingHorizontal: 24 * unit,
  },
  margin: {
    marginEnd: 10 * unit,
  },
});
