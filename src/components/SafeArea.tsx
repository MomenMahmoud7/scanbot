import React, {FC} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import colors from '../utils/colors';

const SafeArea: FC<ViewProps> = ({children}) => {
  const {top} = useSafeAreaInsets();

  return <View style={[styles.container, {paddingTop: top}]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.main,
  },
});

export default SafeArea;
