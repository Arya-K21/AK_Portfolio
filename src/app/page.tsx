"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { projects } from "./projects/data";
import Reveal from "../components/Reveal";
import SpotlightHero from "../components/SpotlightHero";
import ScrollGlass from "../components/ScrollGlass";
import { EtheralShadow } from "../components/ui/etheral-shadow";


export default function Home() {
  // Show top 2 projects on the home page
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      {/* Global Etheral Shadow Background Effect */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, /* Keep it above the dark body background */
          pointerEvents: "none", /* Ensure it doesn't block any clicks */
          opacity: 0.6,
        }}
      >
        <EtheralShadow
          title=""
          animation={{ scale: 100, speed: 50 }}
          noise={{ opacity: 0.5, scale: 1 }}
        />
      </div>

      {/* Scroll-reactive Glass Effect */}
      <ScrollGlass />

      {/* Main Content */}
      <main>
        {/* 1. LANDING HERO (ANIMATED) */}
        <SpotlightHero />

        {/* 3. ABOUT INFO / HOW I WORK */}
        <Reveal className={styles.aboutSection} id="about">
          <span className={styles.sectionLabel}>How I Work</span>
          <h2 className={styles.sectionHeading}>
            I design interfaces that reduce friction and scale. Every decision is
            rooted in user research, technical constraints, and business goals.
          </h2>
          <p className={styles.aboutText}>
            My approach: Start with the problem, not the solution. I combine{" "}
            <strong>user research</strong>,{" "}
            <strong>systems thinking</strong>, and{" "}
            <strong>frontend development</strong> to build products that work
            for real users in real contexts. I don&apos;t just make things look
            good—I make them work better.
          </p>

          {/* Toolkit & Skills Grid */}
          <div className={styles.skillsGrid}>
            {/* Design Column */}
            <div className={styles.skillColumn}>
              <h3 className={styles.skillHeading}>Design</h3>
              <div className={styles.skillTags}>
                {[
                  "Figma",
                  "Adobe CC",
                  "Spline 3D",
                  "Prototyping",
                  "Design Systems",
                  "User Research",
                ].map((skill) => (
                  <span key={skill} className={styles.techTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Development Column */}
            <div className={styles.skillColumn}>
              <h3 className={styles.skillHeading}>Development</h3>
              <div className={styles.skillTags}>
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Java",
                  "Node.js",
                  "MySQL",
                  "Git/GitHub",
                ].map((skill) => (
                  <span key={skill} className={styles.techTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* 4. SELECTED WORK */}
        <section style={{ paddingBottom: "6rem", marginTop: "5rem" }}>
          {/* Section Label */}
          <Reveal width="100%">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className={styles.sectionLabel}>Selected Work</span>
            </div>
          </Reveal>

          {/* Project Grid - horizontal 2-column */}
          <div className={styles.workHeader}>
            <div className={styles.projectGridHorizontal}>
              {featuredProjects.map((project, index) => (
                <Reveal key={project.id} width="100%" delay={index * 0.15}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ width: "100%" }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className={styles.projectCard}
                    >
                      <div
                        className={styles.projectPreview}
                        style={{ background: project.gradient }}
                      >
                        <div className={styles.projectOverlay}>
                          <div className={styles.overlayContent}>
                            <h3 className={styles.overlayTitle}>
                              {project.title}
                            </h3>
                            <div className={styles.techStack}>
                              {project.techStack?.slice(0, 3).map((tech) => (
                                <span key={tech} className={styles.techTag}>
                                  {tech}
                                </span>
                              ))}
                            </div>
                            {project.githubUrl && (
                              <object>
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.githubLink}
                                  aria-label="View Source on GitHub"
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                  </svg>
                                </a>
                              </object>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className={styles.projectInfo}>
                        <h2 className={styles.projectTitle}>{project.title}</h2>
                        <p className={styles.projectDesc}>
                          {project.description}
                        </p>
                        <div className={styles.projectMeta}>
                          <span>{project.role}</span>
                          <span>&rarr;</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            {/* View All Projects Link */}
            <Reveal delay={0.3}>
              <Link href="/projects" className={styles.sideLink}>
                <div className={styles.arrowCircle}>&rarr;</div>
                <span className={styles.labelLink}>All Projects</span>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Footer is handled by RootLayout */}
      </main>
    </>
  );
}