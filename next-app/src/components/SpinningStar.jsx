import { motion } from 'framer-motion';
import Star from './Star';

export default function SpinningStar() {
  return (
    <motion.div
      initial={{
        y: [null],
        x: [-1000, 1000],
      }}
      animate={{
        x: [-1000, 2000, null],
        y: [-500, 500, null],
        rotate: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360],
      }}
      transition={{
        duration: 8,
        rotate: {
          duration: 7,
          ease: 'linear',
          repeat: Infinity,
          repeatDelay: 1,
        },
      }}
      className="absolute"
    >
      <Star />
    </motion.div>
  );
}
