"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { projects } from "../data";
import styles from "./detail.module.css";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug;

  // ========================================
  // FIND PROJECT BY SLUG
  // This automatically loads the project data from data.ts
  // You don't need to edit this section
  // ========================================
  const project = projects.find((p) => p.slug === slug);

  // ========================================
  // 404 FALLBACK
  // Shows if project slug doesn't exist
  // ========================================
  if (!project) {
    return (
      <div className={styles.container}>
        <h1>Project Not Found</h1>
        <Link href="/projects" className={styles.backLink}>&larr; Back to Projects</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className={styles.container}
    >
      {/* ========================================
          BACK BUTTON
          Returns user to projects page
          ======================================== */}
      <Link href="/projects" className={styles.backLink}>
        &larr; Back to Projects
      </Link>

      {/* ========================================
          PROJECT HEADER
          Shows: Title, Year, Role, Description, Tech Stack
          Data comes from data.ts automatically
          ======================================== */}
      <header className={styles.header}>
        {/* PROJECT TITLE - Auto-loaded from data.ts */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={styles.title}
        >
          {project.title}
        </motion.h1>
        
        {/* METADATA - Year and Role */}
        <div className={styles.meta}>
          <span>{project.year}</span>
          <span>{project.role}</span>
        </div>

        {/* PROJECT DESCRIPTION - Auto-loaded from data.ts */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.description}
        >
          {project.description}
        </motion.p>

        {/* TECH STACK TAGS - Auto-loaded from data.ts */}
        <div className={styles.techStack}>
          {project.techStack.map((tech) => (
            <span key={tech} className={styles.techTag}>{tech}</span>
          ))}
        </div>
        
        {/* GITHUB LINK - Only shows if githubUrl exists in data.ts */}
        {project.githubUrl && (
             <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
                View on GitHub
             </a>
        )}
      </header>

      {/* ========================================
          PROJECT GALLERY / IMAGES
          
          HOW TO ADD YOUR PROJECT IMAGES:
          
          1. Add images to: /public/projects/[project-slug]/
             Example: /public/projects/fintech-dashboard/image1.png
          
          2. Replace the placeholder array below with your images:
             
             Example:
             const projectImages = [
               "/projects/fintech-dashboard/hero.png",
               "/projects/fintech-dashboard/dashboard.png",
               "/projects/fintech-dashboard/mobile.png",
               "/projects/fintech-dashboard/details.png"
             ];
          
          3. Then map over them like this:
             {projectImages.map((img, i) => (
               <motion.div key={i} className={styles.galleryItem}>
                 <img src={img} alt={`${project.title} screenshot ${i + 1}`} />
               </motion.div>
             ))}
          
          CURRENT: Shows 4 placeholder boxes
          ======================================== */}
      <section>
        <h3 style={{ fontFamily: 'var(--font-outfit)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Project Gallery</h3>
        <div className={styles.galleryGrid}>
          {/* 
            TODO: Replace this placeholder array with actual images
            Example: const images = ["/projects/fintech-dashboard/img1.png", ...]
          */}
          {[1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i} 
              className={styles.galleryItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* REPLACE THIS with: <img src="/projects/[slug]/image.png" alt="description" /> */}
              <span className={styles.placeholderText}>Image Space {i}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================
          ADDITIONAL SECTIONS (OPTIONAL)
          
          You can add more sections here:
          
          - Project Overview
          - Design Process
          - Challenges & Solutions
          - Results/Impact
          - User Feedback
          
          Example:
          <section className={styles.section}>
            <h2>Design Process</h2>
            <p>Describe your design process here...</p>
          </section>
          ======================================== */}

    </motion.div>
  );
}