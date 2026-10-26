"use client";

import * as React from "react";
import { motion } from "framer-motion";

/**
 * Apple-style scroll reveal (see apple.com/iphone-duo/): content starts
 * translated down and transparent, then rises into place with full
 * opacity as it crosses into the viewport. Triggers once per element.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
