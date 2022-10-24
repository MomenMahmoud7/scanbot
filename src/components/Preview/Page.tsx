import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';

import unit from '../../utils/metrics';

const Page = ({uri = ''}: {uri?: string}) => {
  const [size, setSize] = useState<{width: number; height: number}>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const screenWidth = Dimensions.get('screen').width;
    Image.getSize(uri, (_width, _height) =>
      setSize({
        width: screenWidth - 32 * unit,
        height: _height * ((screenWidth - 32 * unit) / _width),
      }),
    );
  }, [uri]);

  return <Image source={{uri}} style={[styles.image, size]} />;
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    borderRadius: 8 * unit,
    marginBottom: 8 * unit,
  },
});
export default Page;
