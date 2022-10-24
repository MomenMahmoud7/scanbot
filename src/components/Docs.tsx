import React, {useContext, useMemo} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import _isEmpty from 'lodash/isEmpty';
import {FilesContext} from '../screens/Home';
import CardHorizontal from './CardHorizontal';
import CardVertical from './CardVertical';
import Empty from './Empty';

import colors from '../utils/colors';
import unit from '../utils/metrics';

const views = {
  list: CardHorizontal,
  grid: CardVertical,
};

const numColumns = {
  list: 1,
  grid: 2,
};

const Docs = () => {
  const {view, files} = useContext(FilesContext);

  const data = useMemo(() => Object.entries(files || {}), [files]);
  const Card = useMemo(() => views[view], [view]);
  const number = useMemo(() => numColumns[view], [view]);

  if (_isEmpty(files)) {
    return <Empty />;
  }
  return (
    <FlatList
      key={number}
      data={data}
      numColumns={number}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
      renderItem={({item: [name, documentUri]}) => (
        <Card name={name} documentUri={documentUri} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingTop: 24 * unit,
    paddingBottom: 88 * unit,
    paddingHorizontal: 8 * unit,
  },
});
export default Docs;
