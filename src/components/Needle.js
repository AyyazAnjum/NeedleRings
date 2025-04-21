import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NEEDLE_WIDTH, NEEDLE_HEIGHT } from '../utils/constants';

const Needle = ({ x, y }) => (
  <View
    style={[
      styles.needle,
      { left: x - NEEDLE_WIDTH / 2, top: y },
    ]}
  />
);

const styles = StyleSheet.create({
  needle: {
    position: 'absolute',
    width: NEEDLE_WIDTH,
    height: NEEDLE_HEIGHT,
    backgroundColor: 'black',
  },
});

export default React.memo(Needle);