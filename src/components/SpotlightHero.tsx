"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
            alt="Arya Kulkarni - UI/UX Designer & Frontend Developer"
            width={350}
            height={350}
            className={styles.profilePhoto}
            priority
          />
        </div>
      </motion.div>
      
      {/* Content Layer - Left Aligned */}
      <div className={styles.heroContent}>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.name}
        >
          ARYA KULKARNI
        </motion.p>
        
        {/* <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.roleTag}
        >
          UI/UX Designer & Frontend Developer
        </motion.p> */}
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.title}
        >
          I design and build digital products that feel intuitive, look premium, and scale with your business.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={styles.subheading}
        >
          UI/UX Designer & Frontend Developer focused on <strong>design systems</strong>, <strong>scalable interfaces</strong>, and thoughtful user flows. Seeking <strong>junior/mid-level roles</strong> in product-driven teams.
        </motion.p>

        {/* <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className={styles.credibilityLine}
        >
          End-to-end UX · Research → Design → Build · 2 published research papers
        </motion.p> */}

        {/* Call-to-Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.heroCTA}
        >
          <Link href="/projects" className={styles.primaryCTA}>
            View Projects
          </Link>
          <Link href="/#contact" className={styles.secondaryCTA}>
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}