import Star from './Star';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const starSize = 50;

const getRandom = (min, max) => Math.random() * (max - min) + min;

export default function ShootingStar() {
  const [initialX, setInitialX] = useState(0);
  const [finalX, setFinalX] = useState(0);

  useEffect(() => {
    setInitialX(getRandom(0, window.innerWidth));
    setFinalX(getRandom(0, window.innerWidth));
  }, []);

  return (
    <motion.div
      className="fixed z-0"
      initial={{ x: initialX, y: -starSize * 2 }}
      animate={{
        x: finalX,
        y: window.innerHeight + starSize * 2,
        rotate: initialX <= finalX ? 360 : -360,
      }}
      transition={{ duration: 2, ease: 'linear' }}
    >
      <Star size={starSize} />
    </motion.div>
  );
}
