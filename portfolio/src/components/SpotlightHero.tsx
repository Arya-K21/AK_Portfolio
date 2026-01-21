"use client";

import { useRef, useState, useEffect } from "react";
import styles from "../app/page.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SpotlightHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Scroll animations
  const { scrollY } = useScroll();
  
  // Transform values based on scroll position (0px to 300px)
  const width = useTransform(scrollY, [0, 300], ["90%", "100%"]);
  const height = useTransform(scrollY, [0, 300], ["60vh", "100vh"]); // Expand to full height
  const borderRadius = useTransform(scrollY, [0, 300], [32, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.hero} id="home">
      {/* Dynamic Background Spotlight */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(253, 141, 103, 0.18), transparent 40%)`,
          zIndex: 1
        }}
      />

      {/* Fixed Glass Background that expands to become the page background */}
      <motion.div 
        className={styles.fixedGlassBoard}
        style={{ 
          width, 
          height,
          borderRadius, 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Content that scrolls naturally over the glass */}
      <div className={styles.heroContent}>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.name}
        >
          ARYA KULKARNI
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={styles.title}
        >
          Designing Systems.<br />
          Building Experiences.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.description}
        >
           UI/UX Designer & Frontend Developer bridging the gap between <br/>
           visual elegance and technical excellence.
        </motion.p>
      </div>
    </section>
  );
}