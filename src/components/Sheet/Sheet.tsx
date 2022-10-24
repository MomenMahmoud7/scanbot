import React, {FC} from 'react';
import {View} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import unit from '../../utils/metrics';
import ToastManager from '../ToastManager';

import styles from './Sheet.style';

export type SheetUtilsType = {
  open: () => void;
  close: () => void;
};

type ActionsheetPropsType = {
  id: string;
  trigger?: FC<SheetUtilsType>;
  render: FC<SheetUtilsType>;
  onClose?: () => void;
};

const Sheet: FC<ActionsheetPropsType> = ({id, trigger, render, onClose}) => {
  const {bottom = 0} = useSafeAreaInsets();

  const open = () => {
    SheetManager.show(id);
  };
  const close = () => {
    SheetManager.hide(id);
  };

  return (
    <>
      {trigger && trigger({open, close})}
      <ActionSheet
        id={id}
        gestureEnabled
        onClose={onClose}
        containerStyle={styles.wrapper}>
        <View style={[styles.content, {paddingBottom: bottom || 24 * unit}]}>
          {render({open, close})}
        </View>
        <ToastManager />
      </ActionSheet>
    </>
  );
};

export default Sheet;
