import React from 'react';
import {StyleSheet, View} from 'react-native';
import RNRestart from 'react-native-restart';
import SafeArea from './SafeArea';
import Button from './Button';
import Text from './Text';

import colors from '../utils/colors';
import unit from '../utils/metrics';

const ErrorFallback = ({error}: {error: Error}) => {
  return (
    <SafeArea>
      <View style={styles.container}>
        <Text size={48} color={colors.white} bold>
          :(
        </Text>
        <Text size={20} color={colors.white} bold style={styles.title}>
          SOMETHING WENT WRONG
        </Text>
        <Text size={16} color={colors.white} style={styles.subtitle}>
          {error}
        </Text>
        <Button
          text="Reload ScanDocs"
          type="secondary"
          onPress={() => {
            RNRestart.Restart();
          }}
        />
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 32 * unit,
    marginBottom: 8 * unit,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 32 * unit,
    textAlign: 'center',
  },
});
export default ErrorFallback;
