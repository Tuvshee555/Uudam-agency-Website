"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  offset?: number;
};

export default function ParallaxLayer({ children, className, offset = -32 }: ParallaxLayerProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, offset]);

  return (
    <motion.div className={className} style={prefersReducedMotion ? undefined : { y }}>
      {children}
    </motion.div>
  );
}
