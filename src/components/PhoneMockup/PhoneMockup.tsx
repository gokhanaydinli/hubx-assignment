import { motion } from 'motion/react';
import styles from './PhoneMockup.module.css';

interface PhoneMockupProps {
  imageSrcMobile: string;
  imageSrcDesktop: string;
  leftBarSrc?: string;
  rightBarSrc?: string;
  signatureStampSrc?: string;
  completedSrc?: string;
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
    </div>
  );
}
