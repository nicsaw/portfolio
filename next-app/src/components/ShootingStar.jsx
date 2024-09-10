import Star from './Star';
import { motion } from 'framer-motion';

const getRandom = (min, max) => Math.random() * (max - min) + min;

export default function ShootingStar() {
  return (
    <motion.div
      className="fixed top-0 left-0"
      initial={{ x: -100, y: -100, rotate: 0 }}
      animate={{ x: '100vw', y: '100vh', rotate: 360 }}
      transition={{ duration: 10, ease: 'linear' }}
    >
      <Star />
    </motion.div>
  );
}
