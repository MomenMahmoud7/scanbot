import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../utils/colors';
import unit from '../utils/metrics';
import Text from './Text';

const Empty = () => {
  return (
    <View style={styles.container}>
      <Text size={14} color={colors.black}>
        NO SCANNED DOCUMENTS YET
      </Text>
      <Text size={18} color={colors.black} bold style={styles.title}>
        LETS SCAN SOME DOCUMENTS
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24 * unit,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  title: {
    textAlign: 'center',
    marginTop: 16 * unit,
    marginBottom: 8 * unit,
  },
});

export default Empty;
