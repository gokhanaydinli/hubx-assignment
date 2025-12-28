import styles from './PhoneMockup.module.css';
import { SlideData } from '../../types';
import {
  AdvancedFiltersOverlay,
  SignatureOverlay,
  BatchScanOverlay,
  ExportIconsOverlay,
} from './overlays';

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
      <AdvancedFiltersOverlay
        slideData={slideData}
        animationKey={animationKey}
        gpuAcceleration={gpuAcceleration}
      />
      <SignatureOverlay
        slideData={slideData}
        animationKey={animationKey}
        gpuAcceleration={gpuAcceleration}
      />
      <BatchScanOverlay
        slideData={slideData}
        animationKey={animationKey}
        gpuAcceleration={gpuAcceleration}
      />
      <ExportIconsOverlay
        slideData={slideData}
        animationKey={animationKey}
        gpuAcceleration={gpuAcceleration}
      />
    </div>
  );
}
