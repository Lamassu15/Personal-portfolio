import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AnimateSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimateSection = ({
  children,
  className = "",
  delay = 0,
}: AnimateSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: delay,
              },
            }
          : { opacity: 0, scale: 0.8 }
      }
    >
      {children}
    </motion.div>
  );
};

export default AnimateSection;
