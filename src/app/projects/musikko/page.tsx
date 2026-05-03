"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./musikko.module.css";

// Screen metadata — label each screen for the case study narrative
const screens = [
  { src: "/projects/musikko/1.png", label: "Splash Screen", caption: "Bold gold-on-black logo sets the brand tone instantly on app open." },
  { src: "/projects/musikko/2.png", label: "Home", caption: "Continue Listening, Top Mixes, and Library — all surfaced without hunting." },
  { src: "/projects/musikko/3.png", label: "Now Playing", caption: "Full-screen artwork with lyrics, queue, and playback controls — no clutter." },
  { src: "/projects/musikko/4.png", label: "Explore", caption: "Genre cards and Browse All sections make discovery feel effortless." },
  { src: "/projects/musikko/5.png", label: "Library", caption: "Filter by Playlists, Albums, Artists, Songs — your music, your way." },
  { src: "/projects/musikko/6.png", label: "Settings", caption: "Offline mode, themes, sleep timer — power features without overwhelming free users." },
  { src: "/projects/musikko/7.png", label: "Settings cont.", caption: "Language, playback, privacy — everything accessible in one place." },
  { src: "/projects/musikko/8.png", label: "Themes / Appearance", caption: "Light, Dark, Midnight, Neon Pulse, Classic — personalization as a free feature." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function MusikkoPage() {
  return (
    <div className={styles.page}>
      {/* ── BACK LINK ── */}
      <Link href="/projects" className={styles.backLink}>
        ← Back to Projects
      </Link>

      {/* ── HERO HEADER ── */}
      <motion.header
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.tag}>UI/UX Case Study · 2025</span>
        <h1 className={styles.title}>Musikko</h1>
        <p className={styles.tagline}>
          Redefining free music streaming — without the compromise.
        </p>

        {/* Meta row */}
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>Solo UI/UX Designer</span>
          </div>
          <div className={styles.metaDivider} />
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Tools</span>
            <span className={styles.metaValue}>Figma · Prototyping</span>
          </div>
          <div className={styles.metaDivider} />
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Type</span>
            <span className={styles.metaValue}>Mobile App Design</span>
          </div>
          <div className={styles.metaDivider} />
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Year</span>
            <span className={styles.metaValue}>2025</span>
          </div>
        </div>
      </motion.header>

      {/* ── PROBLEM / SOLUTION ── */}
      <section className={styles.section}>
        <div className={styles.twoCol}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.cardLabel}>🔍 The Problem</span>
            <p className={styles.cardText}>
              Most free music apps punish users with mid-song interruptions, aggressive upsell prompts,
              and cluttered UIs. Free users are treated as second-class — even though they represent
              the majority of listeners.
            </p>
            <blockquote className={styles.quote}>
              "How can we design a music app that feels premium for free users, while still
              leaving room for sustainable monetisation?"
            </blockquote>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className={styles.cardLabel}>🎯 The Approach</span>
            <p className={styles.cardText}>
              Musikko is built around one rule: <strong>never interrupt the listening experience.</strong>{" "}
              Ads appear only as skippable intro videos on app open — never mid-song. The visual
              identity (Gold + Black) communicates premium without charging for it.
            </p>
            <div className={styles.pillRow}>
              {["Clean visual identity", "Discoverable playlists", "Smooth onboarding", "Non-intrusive ads"].map((p) => (
                <span key={p} className={styles.pill}>{p}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BRANDING ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Branding & Visual Direction</h2>
        <div className={styles.brandRow}>
          <div className={styles.brandSwatch} style={{ background: "#C9A227" }}>
            <span>#C9A227</span>
            <span>Musikko Gold</span>
          </div>
          <div className={styles.brandSwatch} style={{ background: "#0D0D0D", border: "1px solid rgba(255,255,255,0.1)" }}>
            <span>#0D0D0D</span>
            <span>Deep Black</span>
          </div>
          <div className={styles.brandSwatch} style={{ background: "#FFFFFF", color: "#0D0D0D" }}>
            <span>#FFFFFF</span>
            <span>Pure White</span>
          </div>
        </div>
        <p className={styles.brandNote}>
          The waveform-inside-headphones logo communicates music and identity in a single mark.
          Gold signals premium without a price tag. Black keeps the focus on artwork.
        </p>
      </section>

      {/* ── SCREEN GALLERY ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Final UI Screens</h2>
        <p className={styles.sectionSub}>8 screens covering the full user journey — from splash to personalization.</p>

        <div className={styles.screenGrid}>
          {screens.map((screen, i) => (
            <motion.div
              key={i}
              className={styles.screenCard}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={screen.src}
                  alt={`Musikko — ${screen.label}`}
                  width={320}
                  height={640}
                  className={styles.screenImage}
                  quality={90}
                />
              </div>
              <span className={styles.screenLabel}>{screen.label}</span>
              <p className={styles.screenCaption}>{screen.caption}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MONETISATION ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Monetisation Strategy</h2>
        <div className={styles.monoCard}>
          <div className={styles.monoItem}>
            <span className={styles.monoIcon}>▶</span>
            <div>
              <strong>Skippable intro ads</strong>
              <p>One video ad on app open, skippable after 5 seconds. Zero mid-song interruptions.</p>
            </div>
          </div>
          <div className={styles.monoItem}>
            <span className={styles.monoIcon}>☆</span>
            <div>
              <strong>Optional Premium tier</strong>
              <p>Offline mode, artist exclusives, and advanced themes — unlocked, not pushed.</p>
            </div>
          </div>
          <div className={styles.monoItem}>
            <span className={styles.monoIcon}>◈</span>
            <div>
              <strong>Minimal banner ads</strong>
              <p>Tasteful, non-animated banners only on the Library screen — never over artwork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEARNINGS ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Learnings & Reflections</h2>
        <div className={styles.learningsList}>
          {[
            { icon: "→", text: "User flow planning before visual design saved significant rework." },
            { icon: "→", text: "Spacing and visual hierarchy directly improved perceived readability." },
            { icon: "→", text: "Designing for free users forced creative, user-respecting monetisation thinking." },
            { icon: "→", text: "The theme system (Gold, Midnight, Neon, Classic) added delight without bloat." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.learningItem}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className={styles.learningIcon}>{item.icon}</span>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FUTURE ENHANCEMENTS ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What's Next</h2>
        <div className={styles.futureGrid}>
          {["Waveform pulse animations", "Social listening / friend activity", "Artist pages & discovery algorithm", "Full light/dark mode toggle"].map((item) => (
            <div key={item} className={styles.futureItem}>
              <span className={styles.futureDot} />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER NAV ── */}
      <div className={styles.footerNav}>
        <Link href="/projects" className={styles.backLinkBottom}>
          ← All Projects
        </Link>
      </div>
    </div>
  );
}
