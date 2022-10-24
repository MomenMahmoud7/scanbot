import {StyleSheet} from 'react-native';

const addShadow = (size: 'xl' | 'lg' | 'md' | 'sm') => {
  const styles = StyleSheet.create({
    xl: {
      shadowColor: 'rgba(0, 0, 0, 0.35)',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 20,
    },
    lg: {
      shadowColor: 'rgba(0, 0, 0, 0.35)',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.3,
      shadowRadius: 12,
      elevation: 16,
    },
    md: {
      shadowColor: 'rgba(0, 0, 0, 0.35)',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 6,
    },
    sm: {
      shadowColor: 'rgba(0, 0, 0, 0.35)',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
    },
  });
  return styles[size];
};

export default addShadow;
