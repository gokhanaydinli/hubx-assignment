import { motion } from 'motion/react';
import styles from './PhoneMockup.module.css';

interface PhoneMockupProps {
  imageSrcMobile: string;
  imageSrcDesktop: string;
  leftBarSrc?: string;
  rightBarSrc?: string;
  signatureStampSrc?: string;
  completedSrc?: string;
  batchScan1Src?: string;
  batchScan2Src?: string;
  batchScan3Src?: string;
  exportPdfSrc?: string;
  exportPdf2Src?: string;
  exportTxtSrc?: string;
  exportJpgSrc?: string;
  altText: string;
  animationKey: string | number;
}

export function PhoneMockup({
  imageSrcMobile,
  imageSrcDesktop,
  leftBarSrc,
  rightBarSrc,
  signatureStampSrc,
  completedSrc,
  batchScan1Src,
  batchScan2Src,
  batchScan3Src,
  exportPdfSrc,
  exportPdf2Src,
  exportTxtSrc,
  exportJpgSrc,
  altText,
  animationKey,
}: PhoneMockupProps) {
  return (
    <div className={`flex-center ${styles['phone-wrapper']}`}>
      <picture>
        <source media="(min-width: 1024px)" srcSet={imageSrcDesktop} />
        <img
          src={imageSrcMobile}
          alt={altText}
          className={`block w-full h-auto ${styles['phone-image']}`}
        />
      </picture>
      {leftBarSrc && (
        <motion.img
          key={`left-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            delay: 1.4,
          }}
          src={leftBarSrc}
          alt=""
          className={`absolute ${styles['left-bar']}`}
        />
      )}
      {rightBarSrc && (
        <motion.img
          key={`right-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            delay: 1.6,
          }}
          src={rightBarSrc}
          alt=""
          className={`absolute ${styles['right-bar']}`}
        />
      )}
      {signatureStampSrc && (
        <motion.img
          key={`signature-${animationKey}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 1.4,
          }}
          src={signatureStampSrc}
          alt=""
          className={`absolute ${styles['signature-stamp']}`}
        />
      )}
      {completedSrc && (
        <motion.img
          key={`completed-${animationKey}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 1.8,
          }}
          src={completedSrc}
          alt=""
          className={`absolute ${styles['completed-image']}`}
        />
      )}
      {batchScan1Src && (
        <motion.img
          key={`batch1-${animationKey}`}
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            delay: 1.4,
          }}
          src={batchScan1Src}
          alt=""
          className={`absolute ${styles['batch-scan-1']}`}
        />
      )}
      {batchScan2Src && (
        <motion.img
          key={`batch2-${animationKey}`}
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            delay: 2.0,
          }}
          src={batchScan2Src}
          alt=""
          className={`absolute ${styles['batch-scan-2']}`}
        />
      )}
      {batchScan3Src && (
        <motion.img
          key={`batch3-${animationKey}`}
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            delay: 2.6,
          }}
          src={batchScan3Src}
          alt=""
          className={`absolute ${styles['batch-scan-3']}`}
        />
      )}
      {exportPdfSrc && (
        <motion.img
          key={`export-pdf-${animationKey}`}
          initial={{ y: 200, x: 300 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.4,
          }}
          src={exportPdfSrc}
          alt=""
          className={`absolute ${styles['export-pdf']}`}
        />
      )}
      {exportPdf2Src && (
        <motion.img
          key={`export-pdf2-${animationKey}`}
          initial={{ y: 200, x: 120 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.8,
          }}
          src={exportPdf2Src}
          alt=""
          className={`absolute ${styles['export-pdf2']}`}
        />
      )}
      {exportJpgSrc && (
        <motion.img
          key={`export-jpg-${animationKey}`}
          initial={{ y: 200, x: 10 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 2
          }}
          src={exportJpgSrc}
          alt=""
          className={`absolute ${styles['export-jpg']}`}
        />
      )}
      {exportTxtSrc && (
        <motion.img
          key={`export-txt-${animationKey}`}
          initial={{ y: 200, x: -90 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 2.2
          }}
          src={exportTxtSrc}
          alt=""
          className={`absolute ${styles['export-txt']}`}
        />
      )}
    </div>
  );
}
