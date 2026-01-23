'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollGlass.module.css';

export default function ScrollGlass() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = 400; // Transition completes after 400px of scroll
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={styles.scrollGlass}
      style={{
        '--scroll-progress': scrollProgress,
      } as React.CSSProperties}
    />
  );
}
