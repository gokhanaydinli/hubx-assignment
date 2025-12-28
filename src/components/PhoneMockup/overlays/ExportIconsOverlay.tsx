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
      {slideData.exportPdfIcon && (
        <motion.img
          key={`export-pdf-${animationKey}`}
          initial={{ y: 200, x: 1000 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.4,
          }}
          style={gpuAcceleration}
          src={slideData.exportPdfIcon}
          alt=""
          className={`absolute ${styles['export-pdf']}`}
        />
      )}
      {slideData.exportPdf2Icon && (
        <motion.img
          key={`export-pdf2-${animationKey}`}
          initial={{ y: 200, x: 120 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.8,
          }}
          style={gpuAcceleration}
          src={slideData.exportPdf2Icon}
          alt=""
          className={`absolute ${styles['export-pdf2']}`}
        />
      )}
      {slideData.exportJpgIcon && (
        <motion.img
          key={`export-jpg-${animationKey}`}
          initial={{ y: 200, x: 10 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 2,
          }}
          style={gpuAcceleration}
          src={slideData.exportJpgIcon}
          alt=""
          className={`absolute ${styles['export-jpg']}`}
        />
      )}
      {slideData.exportTxtIcon && (
        <motion.img
          key={`export-txt-${animationKey}`}
          initial={{ y: 200, x: -90 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 2.2,
          }}
          style={gpuAcceleration}
          src={slideData.exportTxtIcon}
          alt=""
          className={`absolute ${styles['export-txt']}`}
        />
      )}
    </>
  );
}
