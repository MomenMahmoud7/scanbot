import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FilesContext} from '../screens/Home';
import Text from './Text';

import ScanBot from '../assets/logo.svg';
import List from '../assets/list.svg';
import Grid from '../assets/grid.svg';
import colors from '../utils/colors';
import unit from '../utils/metrics';

const Header = () => {
  const {view, changeView} = useContext(FilesContext);

  return (
    <View style={styles.container}>
      <ScanBot width={40} height={40} />
      <View style={styles.content}>
        <Text color={colors.white} size={24} bold>
          ScanDocs
        </Text>
        <Text color={colors.white}>by accountable</Text>
      </View>
      <View style={styles.views}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={changeView('list')}
          style={[styles.view, view === 'list' ? styles.selected : {}]}>
          <List
            width={18}
            height={18}
            color={view === 'list' ? colors.main : colors.smoke}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={changeView('grid')}
          style={[styles.view, view === 'grid' ? styles.selected : {}]}>
          <Grid
            width={18}
            height={18}
            color={view === 'grid' ? colors.main : colors.smoke}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24 * unit,
    paddingTop: 16 * unit,
    backgroundColor: colors.main,
  },
  content: {
    marginStart: 16 * unit,
  },
  views: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  view: {
    padding: 8 * unit,
    marginStart: 8 * unit,
    borderRadius: 8 * unit,
    borderWidth: 1 * unit,
    borderColor: colors.smoke,
    backgroundColor: colors.main,
  },
  selected: {
    backgroundColor: colors.smoke,
  },
});
export default Header;
