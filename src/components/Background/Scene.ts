import * as THREE from 'three';
import { ParticleSystem } from './ParticleSystem';
import { autoParallax } from '../../utils/animations/parallaxEffect';

export class Scene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private particleSystem: ParticleSystem;
  private clock: THREE.Clock;

  constructor(container: HTMLDivElement) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.clock = new THREE.Clock();

    this.setupRenderer(container);
    this.setupParticles();
    this.setupCamera();
    this.animate();
  }

  private setupRenderer(container: HTMLDivElement) {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    container.appendChild(this.renderer.domElement);
  }

  private setupParticles() {
    this.particleSystem = new ParticleSystem({
      count: 3000,
      size: 0.003,
      color: '#ffffff',
      spread: 20,
      opacity: 0.6,
    });
    this.scene.add(this.particleSystem.mesh);
  }

  private setupCamera() {
    this.camera.position.z = 5;
  }

  private animate = () => {
    requestAnimationFrame(this.animate);

    const time = this.clock.getElapsedTime();
    this.particleSystem.animate(time);

    const parallaxOffset = autoParallax(time);
    this.camera.position.x = parallaxOffset.x;
    this.camera.position.y = parallaxOffset.y;

    this.renderer.render(this.scene, this.camera);
  };

  handleResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  dispose() {
    this.particleSystem.dispose();
    this.renderer.dispose();
  }
}