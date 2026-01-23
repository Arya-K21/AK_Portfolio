"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../app/page.module.css";
import { motion } from "framer-motion";

export default function SpotlightHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const roles = [
    "GRAPHIC DESIGNER",
    "FRONTEND DEVELOPER",
    "UI/UX DESIGNER",
    "CREATIVE TECHNOLOGIST",
    "SYSTEM ARCHITECT",
    "VISUAL STORYTELLER",
    "INTERACTION DESIGNER",
    "WEB DEVELOPER"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 4000); // Change every 4.0 seconds
    return () => clearInterval(interval);
  }, []);

  const radius = 320;
  const anglePerItem = 45; // 360 / 8 items

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
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(253, 141, 103, 0.08), transparent 40%)`,
          zIndex: 1
        }}
      />

      {/* Right Side Feature Shape with Profile Photo */}
      <motion.div 
        className={styles.rightFeature}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className={styles.featurePlaceholder}>
          <Image 
            src="/Photo-new1.png"
            alt="Arya Kulkarni"
            width={400}
            height={400}
            className={styles.profilePhoto}
            priority
          />
        </div>
      </motion.div>
      
      {/* Content Layer (Centralized) */}
      <div className={styles.heroContent}>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.name}
        >
          ARYA KULKARNI
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.title}
        >
          Designing Systems.<br />
          Building Experiences.
        </motion.h1>

        {/* Skills Carousel - Centered Below Title */}
        <div className={styles.skillsCarouselWrapper}>
           {roles.map((role, index) => {
             const isActive = index === activeIndex % roles.length;
             return (
               <div 
                 key={role}
                 className={styles.skillItem}
                 style={{ 
                   opacity: isActive ? 1 : 0,
                   transform: isActive ? 'translateX(0)' : 'translateX(-100%)', // Slide in from left like a book page
                   top: 0,
                   transition: "opacity 0.6s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)" // Bouncy slide
                 }}
               >
                 {role}
               </div>
             );
           })}
        </div>
      </div>
    </section>
  );
}