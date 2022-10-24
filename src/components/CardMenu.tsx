import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Preview from './Preview';

import More from '../assets/more.svg';
import colors from '../utils/colors';
import unit from '../utils/metrics';

const CardMenu: FC<{name: string; documentUri: string}> = ({
  name,
  documentUri,
}) => {
  return (
    <Preview
      documentUri={documentUri}
      id={`more-${documentUri}`}
      name={name}
      trigger={({open}) => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={open}
          style={styles.trigger}>
          <More width={16 * unit} height={16 * unit} color={colors.main} />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  trigger: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8 * unit,
    width: 32 * unit,
    height: 32 * unit,
    backgroundColor: colors.smoke,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 24 * unit,
    paddingHorizontal: 24 * unit,
  },
  button: {
    marginEnd: 16 * unit,
  },
});
export default CardMenu;
