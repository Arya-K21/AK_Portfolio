"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./Preloader";
import { LoadingProvider, useLoading } from "../context/LoadingContext";

function PreloaderManager() {
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    // Check session storage
    if (typeof window !== "undefined") {
      const hasVisited = sessionStorage.getItem("portfolio_visited");
       // DISABLED FOR TESTING: Remove comment to enable one-time-per-session
      // if (hasVisited) {
      //   setLoading(false);
      // }
    }
  }, [setLoading]);

  const handleLoaderComplete = () => {
    sessionStorage.setItem("portfolio_visited", "true");
    setLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      {loading && <Preloader key="preloader" onComplete={handleLoaderComplete} />}
    </AnimatePresence>
  );
}

function ContentWrapper({ children }: { children: React.ReactNode }) {
  const { loading } = useLoading();

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }} /* Deeper rush from 200px */
      animate={!loading ? { y: 0, opacity: 1 } : {}}
      transition={{ 
        duration: 1.2, 
        ease: [0.25, 1, 0.5, 1],
        delay: 0.2 // Wait for preloader to visually clear a bit
      }}
      style={{ minHeight: "100vh" }} // Ensure it takes full height
    >
      {children}
    </motion.div>
  );
}

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <PreloaderManager />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </LoadingProvider>
  );
}
