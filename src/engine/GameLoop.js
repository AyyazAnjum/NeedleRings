import React from 'react';
import Needle from '../components/Needle';
import {
  CIRCLE_RADIUS,
  NEEDLE_SPEED,
  COLLISION_THRESHOLD,
} from '../utils/constants';

let rotation = 0;
let nextId = 0;

export default function GameLoop(entities, { touches }) {
  const circle = entities.circle;

  // Rotate
  rotation += 0.05;
  circle.angle = rotation;
  circle.renderer = React.cloneElement(circle.renderer, { angle: rotation });

  // Spawn on tap
  touches.filter(t => t.type === 'press').forEach(() => {
    const id = `n${nextId++}`;
    const startX = circle.position.x;
    const startY = circle.position.y + CIRCLE_RADIUS + 10;
    entities[id] = {
      x: startX,
      y: startY,
      stuck: false,
      angle: 0,
      renderer: <Needle x={startX} y={startY} angle={0} />, 
    };
  });

  // Animate & stick
  Object.keys(entities)
    .filter(k => k.startsWith('n'))
    .forEach(key => {
      const e = entities[key];
      if (!e.stuck) {
        e.y -= NEEDLE_SPEED;
        // At edge?
        if (e.y <= circle.position.y + CIRCLE_RADIUS) {
          const dx = e.x - circle.position.x;
          const dy = e.y - circle.position.y;
          let impact = Math.atan2(dy, dx) - rotation;
          impact = (impact + 2 * Math.PI) % (2 * Math.PI);

          // collision?
          const hit = Object.keys(entities)
            .filter(k => k.startsWith('n') && entities[k].stuck)
            .some(k => Math.abs(impact - entities[k].angle) < COLLISION_THRESHOLD);

          if (hit) {
            console.log('Game Over');
            // TODO: reset
          } else {
            // stick
            e.stuck = true;
            e.angle = impact;
            // compute render props
            const global = impact + rotation;
            e.x = circle.position.x + Math.cos(global) * CIRCLE_RADIUS;
            e.y = circle.position.y + Math.sin(global) * CIRCLE_RADIUS;
            e.renderer = React.cloneElement(e.renderer, {
              x: e.x,
              y: e.y,
              angle: global + Math.PI / 2, // point inward
            });
          }
        }
      }
    });

  return entities;
}