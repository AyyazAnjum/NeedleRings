import React, { useRef } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import GameLoop from './src/engine/GameLoop';
import Circle from './src/components/Circle';
import { WIDTH, CIRCLE_RADIUS } from './src/utils/constants';

export default function App() {
  const engine = useRef(null);

  return (
    <>
      <StatusBar hidden />
      <GameEngine
        ref={engine}
        style={styles.container}
        systems={[GameLoop]}
        entities={{
          circle: {
            position: { x: WIDTH / 2, y: 200 },
            radius: CIRCLE_RADIUS,
            angle: 0,
            renderer: <Circle angle={0} />,
          },
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF6F0',
  },
});