import React, {createContext, useEffect, useState} from 'react';
import _omit from 'lodash/omit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import Docs from '../components/Docs';
import Header from '../components/Header';
import SafeArea from '../components/SafeArea';
import Scan from '../components/Scan';

type FilesType = {
  [s: string]: string;
};

type ViewType = 'list' | 'grid';

type ContextType = {
  view: ViewType;
  changeView: (view: ViewType) => () => void;
  files: FilesType;
  addFile: (name: string, documentUri: string) => void;
  editFile: (oldName: string, name: string, documentUri: string) => void;
  removeFile: (name: string) => void;
};

export const FilesContext = createContext<ContextType>({
  view: 'list',
  changeView: () => () => {},
  files: {},
  addFile: () => {},
  editFile: () => {},
  removeFile: () => {},
});

const Home = () => {
  const [view, setView] = useState<ViewType>('list');
  const [files, setFiles] = useState({});

  useEffect(() => {
    AsyncStorage.getItem('state')
      .then(storedState => {
        const state = JSON.parse(storedState || '{view: "list", files: {}}');
        setView(state.view);
        setFiles(state.files);
      })
      .catch(() => {
        Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: "Couldn't retrieve old state.",
        });
      });
  }, []);

  useEffect(() => {
    const state = JSON.stringify({view, files});
    AsyncStorage.setItem('state', state);
  }, [files, view]);

  const changeView = (selectedView: ViewType) => () => {
    setView(selectedView);
  };

  const addFile = (name: string, documentUri: string) => {
    setFiles({...files, [name]: documentUri});
  };

  const editFile = (oldName: string, name: string, documentUri: string) => {
    const restFiles = _omit(files, [oldName]);
    setFiles({...restFiles, [name]: documentUri});
  };

  const removeFile = (name: string) => {
    const restFiles = _omit(files, [name]);
    setFiles(restFiles);
  };

  return (
    <FilesContext.Provider
      value={{view, changeView, files, addFile, editFile, removeFile}}>
      <SafeArea>
        <Header />
        <Docs />
        <Scan />
      </SafeArea>
    </FilesContext.Provider>
  );
};

export default Home;
