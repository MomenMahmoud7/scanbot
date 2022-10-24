import React, {FC} from 'react';
import {StyleSheet, Text as NativeText, TextProps} from 'react-native';
import colors from '../utils/colors';
import unit from '../utils/metrics';

const Text: FC<TextProps & {size?: number; color?: string; bold?: boolean}> = ({
  children,
  size = 16,
  color = colors.black,
  bold = false,
  style,
  ...props
}) => {
  return (
    <NativeText
      {...props}
      style={[
        style,
        bold ? styles.bold : styles.normal,
        {
          color,
          fontSize: size * unit,
        },
      ]}>
      {children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  normal: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
});
export default Text;
