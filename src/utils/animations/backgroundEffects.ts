import { Vector3 } from 'three';

export const createParticleField = (count: number, spread: number): Float32Array => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * spread;
    positions[i + 1] = (Math.random() - 0.5) * spread;
    positions[i + 2] = (Math.random() - 0.5) * spread;
  }
  return positions;
};

export const calculateMouseEffect = (
  mouseX: number,
  mouseY: number,
  currentPos: Vector3,
  strength: number = 0.05
): Vector3 => {
  return new Vector3(
    currentPos.x + (mouseX * 2 - currentPos.x) * strength,
    currentPos.y + (-mouseY * 2 - currentPos.y) * strength,
    currentPos.z
  );
};