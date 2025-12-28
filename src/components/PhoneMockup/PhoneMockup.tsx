import { motion } from 'motion/react';
import styles from './PhoneMockup.module.css';
import { SlideData } from '../../types';

interface PhoneMockupProps {
  slideData: SlideData;
  animationKey: string | number;
}

const gpuAcceleration = {
  willChange: 'transform',
  transform: 'translateZ(0)',
};

export function PhoneMockup({ slideData, animationKey }: PhoneMockupProps) {
  return (
    <div className={`flex-center ${styles['phone-wrapper']}`}>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={slideData.phoneImageDesktop}
        />
        <img
          src={slideData.phoneImageMobile}
          alt={slideData.title}
          className={`block w-full h-auto ${styles['phone-image']}`}
        />
      </picture>
      {slideData.leftBarImage && (
        <motion.img
          key={`left-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            delay: 1.4,
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
            delay: 1.6,
          }}
          style={gpuAcceleration}
          src={slideData.rightBarImage}
          alt=""
          className={`absolute ${styles['right-bar']}`}
        />
      )}
      {slideData.signatureStampImage && (
        <motion.img
          key={`signature-${animationKey}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 1.4,
          }}
          style={gpuAcceleration}
          src={slideData.signatureStampImage}
          alt=""
          className={`absolute ${styles['signature-stamp']}`}
        />
      )}
      {slideData.completedImage && (
        <motion.img
          key={`completed-${animationKey}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 1.8,
          }}
          style={gpuAcceleration}
          src={slideData.completedImage}
          alt=""
          className={`absolute ${styles['completed-image']}`}
        />
      )}
      {slideData.batchImage1 && (
        <motion.img
          key={`batch1-${animationKey}`}
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            delay: 1.4,
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
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            delay: 2.0,
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
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            delay: 2.6,
          }}
          style={gpuAcceleration}
          src={slideData.batchImage3}
          alt=""
          className={`absolute ${styles['batch-scan-3']}`}
        />
      )}
      {slideData.exportPdfIcon && (
        <motion.img
          key={`export-pdf-${animationKey}`}
          initial={{ y: 200, x: 300 }}
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
    </div>
  );
}
