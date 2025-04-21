import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WIDTH, CIRCLE_RADIUS } from '../utils/constants';

const Circle = ({ angle }) => (
  <View style={[styles.circle, { transform: [{ rotate: `${angle}rad` }] }]} />
);

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    top: 200,
    left: WIDTH / 2 - CIRCLE_RADIUS,
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    backgroundColor: '#222',
  },
});

export default React.memo(Circle);