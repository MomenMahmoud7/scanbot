import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Toast, {BaseToast} from 'react-native-toast-message';
import colors from '../utils/colors';
import unit from '../utils/metrics';

const ToastManager = () => {
  return (
    <Toast
      position="bottom"
      visibilityTime={30000}
      config={{
        error: props => {
          return (
            <BaseToast
              {...props}
              style={[styles.container, {backgroundColor: colors.danger}]}
              contentContainerStyle={styles.content}
              text1NumberOfLines={2}
              text1Style={[styles.text1, {color: colors.white}]}
              text2Style={[styles.text2, {color: colors.white}]}
            />
          );
        },
        info: props => {
          return (
            <BaseToast
              {...props}
              style={[styles.container, {backgroundColor: colors.smoke}]}
              contentContainerStyle={styles.content}
              text1NumberOfLines={2}
              text1Style={[styles.text1, {color: colors.black}]}
              text2Style={[styles.text2, {color: colors.black}]}
            />
          );
        },
      }}
    />
  );
};

const width = Dimensions.get('screen').width - 32 * unit;

const styles = StyleSheet.create({
  container: {
    width,
    height: 'auto',
    borderLeftWidth: 0,
    borderRadius: 16 * unit,
  },
  content: {
    padding: 16 * unit,
  },
  text1: {
    marginBottom: 0,
    fontSize: 16 * unit,
    lineHeight: 24 * unit,
  },
  text2: {
    fontSize: 14 * unit,
    lineHeight: 20 * unit,
  },
});
export default ToastManager;
