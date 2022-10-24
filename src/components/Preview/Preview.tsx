import React, {FC, useCallback, useContext, useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';
import Pdf from 'react-native-pdf';
import Share from 'react-native-share';
import Toast from 'react-native-toast-message';
import {FilesContext} from '../../screens/Home';
import Button from '../Button';
import Sheet from '../Sheet';

import ShareIcon from '../../assets/share.svg';
import SaveIcon from '../../assets/save.svg';
import DeleteIcon from '../../assets/delete.svg';
import styles from './Preview.style';

import {SheetUtilsType} from '../Sheet/Sheet';

type PreviewPropsType = {
  name?: string;
  documentUri: string;
  id: string;
  trigger?: FC<SheetUtilsType>;
  clear?: () => void;
};

const Preview: FC<PreviewPropsType> = ({
  name: storedName = '',
  documentUri,
  id,
  trigger,
  clear,
}) => {
  const [name, setName] = useState('Untitled');
  const {files, addFile, editFile, removeFile} = useContext(FilesContext);

  useEffect(() => {
    if (!storedName) {
      SheetManager.show(id);
    }
    setName(storedName || 'Untitled');
  }, [storedName, id]);

  const share = useCallback(() => {
    Share.open({url: documentUri});
  }, [documentUri]);

  const save = useCallback(() => {
    const nameTaken = files?.[name];

    if (nameTaken) {
      return Toast.show({
        type: 'info',
        text1: 'EXISTED',
        text2: "Name already taken, let's change it.",
      });
    }

    addFile(name, documentUri);
    SheetManager.hide(id);
  }, [addFile, documentUri, files, id, name]);

  const edit = useCallback(() => {
    const nameTaken = files?.[name] && name !== storedName;

    if (nameTaken) {
      return Toast.show({
        type: 'info',
        text1: 'EXISTED',
        text2: "Name already taken, let's change it.",
      });
    }

    editFile(storedName, name, documentUri);
    SheetManager.hide(id);
  }, [documentUri, editFile, files, id, name, storedName]);

  const remove = useCallback(() => {
    if (clear) {
      clear();
    }
    removeFile(name);
    SheetManager.hide(id);
  }, [clear, id, name, removeFile]);

  return (
    <Sheet
      id={id}
      trigger={trigger}
      onClose={clear}
      render={() => (
        <View>
          <View style={styles.preview}>
            <Pdf source={{uri: documentUri}} style={styles.pdf} />
          </View>
          <TextInput
            value={name}
            onChangeText={text => {
              setName(text);
            }}
            style={styles.input}
          />
          <View style={styles.controllers}>
            <Button
              text="Share"
              icon={ShareIcon}
              type="secondary"
              style={styles.margin}
              onPress={share}
            />
            <Button
              text="Save"
              icon={SaveIcon}
              type="secondary"
              style={styles.margin}
              onPress={storedName ? edit : save}
            />
            <Button
              text="Delete"
              icon={DeleteIcon}
              type="danger"
              onPress={remove}
            />
          </View>
        </View>
      )}
    />
  );
};

export default Preview;
