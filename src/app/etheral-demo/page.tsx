'use client';

import React from 'react';
import { EtheralShadow } from '@/components/ui/etheral-shadow';
import styles from './page.module.css';

export default function DemoOne() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.demoWrapper}>
        <EtheralShadow
          color="rgba(128, 128, 128, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        />
      </div>
    </div>
  );
}
