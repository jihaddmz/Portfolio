import * as THREE from 'three';
import { ParticleOptions } from '../../types/background';

export class ParticleSystem {
  private geometry: THREE.BufferGeometry;
  private material: THREE.PointsMaterial;
  public mesh: THREE.Points;

  constructor(options: ParticleOptions) {
    const {
      count = 5000,
      size = 0.005,
      color = '#8b5cf6',
      spread = 15,
      opacity = 0.8
    } = options;

    this.geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * spread;
      positions[i + 1] = (Math.random() - 0.5) * spread;
      positions[i + 2] = (Math.random() - 0.5) * spread;
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    this.material = new THREE.PointsMaterial({
      size,
      color,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
    });

    this.mesh = new THREE.Points(this.geometry, this.material);
  }

  animate(time: number) {
    this.mesh.rotation.y = time * 0.05;
    this.mesh.rotation.x = time * 0.03;
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}