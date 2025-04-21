import { Dimensions } from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const CIRCLE_RADIUS = 50;
export const NEEDLE_WIDTH = 4;
export const NEEDLE_HEIGHT = 40;
export const NEEDLE_SPEED = 7; // pixels/frame
export const COLLISION_THRESHOLD = 0.3; // radians