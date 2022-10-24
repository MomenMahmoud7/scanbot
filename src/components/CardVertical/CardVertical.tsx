import React, {FC} from 'react';
import {View} from 'react-native';
import Pdf from 'react-native-pdf';
import Text from '../Text';
import CardMenu from '../CardMenu';

import styles from './CardVertical.style';
import addShadow from '../../utils/addShadow';

import {FileType} from '../../types/file';

const CardVertical: FC<FileType> = ({name, documentUri}) => {
  return (
    <View style={[styles.wrapper, addShadow('lg')]}>
      <View style={styles.container}>
        <View style={styles.preview}>
          <Pdf source={{uri: documentUri}} style={styles.pdf} />
        </View>
        <View style={styles.controllers}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
            {name}
          </Text>
          <CardMenu name={name} documentUri={documentUri} />
        </View>
      </View>
    </View>
  );
};

export default CardVertical;
