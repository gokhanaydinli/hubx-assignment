import { motion } from 'motion/react';
import styles from './PhoneMockup.module.css';

interface PhoneMockupProps {
  imageSrcMobile: string;
  imageSrcDesktop: string;
  leftBarSrc?: string;
  rightBarSrc?: string;
  altText: string;
  animationKey: string | number;
}

export function PhoneMockup({
  imageSrcMobile,
  imageSrcDesktop,
  leftBarSrc,
  rightBarSrc,
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
            delay: 1.8,
          }}
          src={rightBarSrc}
          alt=""
          className={`absolute ${styles['right-bar']}`}
        />
      )}
    </div>
  );
}
