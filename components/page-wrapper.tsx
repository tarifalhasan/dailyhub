"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <AnimatePresence>
        <motion.main
          key={typeof window === "undefined" ? "ssr" : undefined}
          className="pt-[85px] lg:pt-[105px]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.1 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}
