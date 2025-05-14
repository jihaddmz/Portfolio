import { useEffect, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  reverse?: boolean;
}

export function useParallax({ speed = 0.1, reverse = false }: ParallaxOptions = {}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) * speed;
      const y = (window.innerHeight / 2 - e.clientY) * speed;
      
      setOffset({
        x: reverse ? -x : x,
        y: reverse ? -y : y,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [speed, reverse]);

  return offset;
}