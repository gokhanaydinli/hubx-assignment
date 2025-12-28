import { motion } from 'motion/react';
import { SlideData } from '../../../types';
import styles from '../PhoneMockup.module.css';

interface SignatureOverlayProps {
  slideData: SlideData;
  animationKey: string | number;
  gpuAcceleration: {
    willChange: string;
    transform: string;
  };
}

export function SignatureOverlay({
  slideData,
  animationKey,
  gpuAcceleration,
}: SignatureOverlayProps) {
  return (
    <>
      {slideData.signatureStamp && (
        <motion.img
          key={`signature-${animationKey}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.4,
          }}
          style={gpuAcceleration}
          src={slideData.signatureStamp}
          alt=""
          className={`absolute ${styles['signature-stamp']}`}
        />
      )}
      {slideData.signatureCompleted && (
        <motion.img
          key={`completed-${animationKey}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.8,
          }}
          style={gpuAcceleration}
          src={slideData.signatureCompleted}
          alt=""
          className={`absolute ${styles['completed-image']}`}
        />
      )}
    </>
  );
}
