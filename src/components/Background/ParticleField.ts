import * as THREE from 'three';
import { createParticleField } from '../../utils/animations/backgroundEffects';

export class ParticleField {
  private geometry: THREE.BufferGeometry;
  private material: THREE.PointsMaterial;
  public mesh: THREE.Points;

  constructor(count: number = 5000, spread: number = 15) {
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(createParticleField(count, spread), 3)
    );

    this.material = new THREE.PointsMaterial({
      size: 0.005,
      color: '#8b5cf6',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    this.mesh = new THREE.Points(this.geometry, this.material);
  }

  animate() {
    this.mesh.rotation.y += 0.0005;
    this.mesh.rotation.x += 0.0005;
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}