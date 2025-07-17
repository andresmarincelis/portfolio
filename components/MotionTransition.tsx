"use client";

import { FadeIn } from "@/utils/TransitionVariantsPage";
import { motion } from "framer-motion";

interface MotionTransitionProps {
  children: React.ReactNode;
  position: "right" | "bottom";
  className?: string;
}

const MotionTransition = ({
  children,
  position,
  className,
}: MotionTransitionProps) => {
  return (
    <motion.div
      variants={FadeIn(position)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionTransition;
