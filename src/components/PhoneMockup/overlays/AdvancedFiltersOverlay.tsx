import { motion } from 'motion/react';
import { SlideData } from '../../../types';
import styles from '../PhoneMockup.module.css';

interface AdvancedFiltersOverlayProps {
  slideData: SlideData;
  animationKey: string | number;
}

export function AdvancedFiltersOverlay({
  slideData,
  animationKey,
}: AdvancedFiltersOverlayProps) {
  return (
    <>
      {slideData.advancedFiltersLeftBar && (
        <motion.img
          key={`left-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.4,
          }}
          src={slideData.advancedFiltersLeftBar}
          alt=""
          className={`absolute ${styles['left-bar']}`}
        />
      )}
      {slideData.advancedFiltersRightBar && (
        <motion.img
          key={`right-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.6,
          }}
          src={slideData.advancedFiltersRightBar}
          alt=""
          className={`absolute ${styles['right-bar']}`}
        />
      )}
    </>
  );
}
