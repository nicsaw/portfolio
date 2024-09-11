import Star from './Star';
import { motion } from 'framer-motion';

const starSize = 50;

const getRandom = (min, max) => Math.random() * (max - min) + min;

export default function ShootingStar() {
  const initialX = getRandom(0, window.innerWidth);
  const finalX = getRandom(0, window.innerWidth);

  return (
    <motion.div
      className="fixed"
      initial={{ x: initialX, y: -100 }}
      animate={{
        x: finalX,
        y: '100vh',
        rotate: initialX <= finalX ? 360 : -360,
      }}
      transition={{ duration: 2, ease: 'linear' }}
    >
      <Star size={starSize} />
    </motion.div>
  );
}
