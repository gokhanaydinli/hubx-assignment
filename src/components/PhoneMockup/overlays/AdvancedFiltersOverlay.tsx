import { motion } from 'motion/react';
import { SlideData } from '../../../types';
import styles from '../PhoneMockup.module.css';

interface AdvancedFiltersOverlayProps {
  slideData: SlideData;
  animationKey: string | number;
  gpuAcceleration: {
    willChange: string;
    transform: string;
  };
}

export function AdvancedFiltersOverlay({
  slideData,
  animationKey,
  gpuAcceleration,
}: AdvancedFiltersOverlayProps) {
  return (
    <>
      {slideData.leftBarImage && (
        <motion.img
          key={`left-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.4,
          }}
          style={gpuAcceleration}
          src={slideData.leftBarImage}
          alt=""
          className={`absolute ${styles['left-bar']}`}
        />
      )}
      {slideData.rightBarImage && (
        <motion.img
          key={`right-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.6,
          }}
          style={gpuAcceleration}
          src={slideData.rightBarImage}
          alt=""
          className={`absolute ${styles['right-bar']}`}
        />
      )}
    </>
  );
}
