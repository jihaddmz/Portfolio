import { ParallaxOffset } from '../../types/background';

export const autoParallax = (time: number): ParallaxOffset => {
  const amplitude = 0.5; // Maximum movement distance
  const frequency = 0.5; // Speed of movement

  return {
    x: Math.sin(time * frequency) * amplitude,
    y: Math.cos(time * frequency) * amplitude,
  };
};