import React, {FC} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import Text from './Text';

import colors from '../utils/colors';
import unit from '../utils/metrics';

type ButtonProps = {
  text: string;
  icon?: FC<SvgProps>;
  iconProps?: SvgProps;
  type?: 'primary' | 'secondary' | 'danger';
} & TouchableOpacityProps;

const types = {
  primary: {
    background: colors.main,
    text: colors.white,
    icon: colors.white,
  },
  secondary: {
    background: colors.smoke,
    text: colors.main,
    icon: colors.main,
  },
  danger: {
    background: colors.danger,
    text: colors.white,
    icon: colors.white,
  },
};

const Button: FC<ButtonProps> = ({
  text,
  type = 'primary',
  icon: Icon,
  style,
  iconProps = {width: 20 * unit, height: 20 * unit},
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
      style={[
        styles.container,
        {backgroundColor: types[type].background},
        style,
      ]}>
      {!!Icon && <Icon {...iconProps} color={types[type].icon} />}
      <Text style={styles.text} size={10} color={types[type].text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16 * unit,
    minWidth: 100 * unit,
    borderRadius: 16 * unit,
  },
  text: {
    fontWeight: '500',
    marginTop: 4 * unit,
  },
});
export default Button;
