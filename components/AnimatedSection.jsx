"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
  };

  const initialPosition = directions[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialPosition }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, ...initialPosition }
      }
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
