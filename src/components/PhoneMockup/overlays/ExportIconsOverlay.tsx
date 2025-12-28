import { motion } from 'motion/react';
import { SlideData } from '../../../types';
import styles from '../PhoneMockup.module.css';

interface ExportIconsOverlayProps {
  slideData: SlideData;
  animationKey: string | number;
  gpuAcceleration: {
    willChange: string;
    transform: string;
  };
}

export function ExportIconsOverlay({
  slideData,
  animationKey,
  gpuAcceleration,
}: ExportIconsOverlayProps) {
  return (
    <>
      {slideData.exportPdfPrimary && (
        <motion.img
          key={`export-pdf-${animationKey}`}
          initial={{ y: 200, x: 1000 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.4,
          }}
          style={gpuAcceleration}
          src={slideData.exportPdfPrimary}
          alt=""
          className={`absolute ${styles['export-pdf-primary']}`}
        />
      )}
      {slideData.exportPdfSecondary && (
        <motion.img
          key={`export-pdf-secondary-${animationKey}`}
          initial={{ y: 200, x: 120 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.8,
          }}
          style={gpuAcceleration}
          src={slideData.exportPdfSecondary}
          alt=""
          className={`absolute ${styles['export-pdf-secondary']}`}
        />
      )}
      {slideData.exportJpg && (
        <motion.img
          key={`export-jpg-${animationKey}`}
          initial={{ y: 200, x: 10 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.0,
          }}
          style={gpuAcceleration}
          src={slideData.exportJpg}
          alt=""
          className={`absolute ${styles['export-jpg']}`}
        />
      )}
      {slideData.exportTxt && (
        <motion.img
          key={`export-txt-${animationKey}`}
          initial={{ y: 200, x: -90 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.2,
          }}
          style={gpuAcceleration}
          src={slideData.exportTxt}
          alt=""
          className={`absolute ${styles['export-txt']}`}
        />
      )}
    </>
  );
}
