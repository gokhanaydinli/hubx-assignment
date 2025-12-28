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
      />
      <SignatureOverlay
        slideData={slideData}
        animationKey={animationKey}
      />
      <BatchScanOverlay
        slideData={slideData}
        animationKey={animationKey}
      />
      <ExportIconsOverlay
        slideData={slideData}
        animationKey={animationKey}
      />
    </div>
  );
}
