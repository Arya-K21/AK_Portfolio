import Link from "next/link";
import styles from "../app/page.module.css";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

const RESUME_URL = "https://drive.google.com/file/d/1Dsz5Jlh3Wthwmi3_zbCR9blAGzNdQU_r/view?usp=drive_link";

export default function SpotlightHero() {
  return (
    <section className={styles.hero} id="home">


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

        {/* Typewriter Role */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className={styles.typewriterRow}
        >
          <TypewriterText />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.title}
        >
          I design and build digital products that feel intuitive, look premium,
          and scale with your business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={styles.subheading}
        >
          CS student at Pune — blending{" "}
          <strong>frontend development</strong>,{" "}
          <strong>UI/UX design</strong>, and{" "}
          <strong>full-stack problem solving</strong> to build things that
          actually work for real users.
        </motion.p>

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
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeCTA}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "8px" }}
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            View Resume
          </a>
          <Link href="/#contact" className={styles.secondaryCTA}>
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}