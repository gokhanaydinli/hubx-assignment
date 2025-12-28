import { motion } from 'motion/react';
import { SlideData } from '../../../types';
import styles from '../PhoneMockup.module.css';

interface BatchScanOverlayProps {
  slideData: SlideData;
  animationKey: string | number;
  gpuAcceleration: {
    willChange: string;
    transform: string;
  };
}

export function BatchScanOverlay({
  slideData,
  animationKey,
  gpuAcceleration,
}: BatchScanOverlayProps) {
  return (
    <>
      {slideData.batchImage1 && (
        <motion.img
          key={`batch1-${animationKey}`}
          initial={{ y: 400, rotateX: -15 }}
          animate={{ y: 0, rotateX: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4,
          }}
          style={gpuAcceleration}
          src={slideData.batchImage1}
          alt=""
          className={`absolute ${styles['batch-scan-1']}`}
        />
      )}
      {slideData.batchImage2 && (
        <motion.img
          key={`batch2-${animationKey}`}
          initial={{ y: 400, rotateX: -15 }}
          animate={{ y: 0, rotateX: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.7,
          }}
          style={gpuAcceleration}
          src={slideData.batchImage2}
          alt=""
          className={`absolute ${styles['batch-scan-2']}`}
        />
      )}
      {slideData.batchImage3 && (
        <motion.img
          key={`batch3-${animationKey}`}
          initial={{ y: 400, rotateX: -15 }}
          animate={{ y: 0, rotateX: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            delay: 1,
          }}
          style={gpuAcceleration}
          src={slideData.batchImage3}
          alt=""
          className={`absolute ${styles['batch-scan-3']}`}
        />
      )}
    </>
  );
}
