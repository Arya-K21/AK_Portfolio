"use client";

import { useState, useEffect } from "react";
import styles from "../app/page.module.css";

const WORDS = [
  // 🔧 CUSTOMIZE: Edit the roles that cycle in the typewriter effect
  "UI/UX Designer",
  "Frontend Developer",
  "Full-Stack Dev",
  "CSE Student",
];

export default function TypewriterText() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 80);
      } else {
        // Pause at full word before deleting
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 45);
      } else {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % WORDS.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <span className={styles.typewriter}>
      {displayed}
      <span className={styles.cursor}>|</span>
    </span>
  );
}
