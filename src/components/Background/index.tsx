import React, { useEffect, useRef } from 'react';
import { Scene } from './Scene';
import SpaceBackground from './SpaceBackground';

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<Scene | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    sceneRef.current = new Scene(containerRef.current);
    const handleResize = () => sceneRef.current?.handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      sceneRef.current?.dispose();
    };
  }, []);

  return (
    <>
      <SpaceBackground />
      <div 
        ref={containerRef} 
        className="fixed inset-0 -z-10"
        style={{ 
          background: 'radial-gradient(circle at center, rgba(26, 26, 46, 0.5) 0%, rgba(15, 15, 26, 0.8) 100%)',
        }} 
      />
    </>
  );
}