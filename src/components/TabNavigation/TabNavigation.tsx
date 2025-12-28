import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import styles from './TabNavigation.module.css';
import { SlideData } from '../../types';
import { TAB_SLIDER_CONFIG } from '../../constants';

import 'swiper/css';

interface TabNavigationProps {
  slides: SlideData[];
  activeIndex: number;
  onTabClick: (index: number) => void;
}

export function TabNavigation({
  slides,
  activeIndex,
  onTabClick,
}: TabNavigationProps) {
  const [tabSwiper, setTabSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (tabSwiper && window.innerWidth < 1024) {
      tabSwiper.slideTo(activeIndex);
    }
  }, [activeIndex, tabSwiper]);

  return (
    <nav className={`w-full ${styles['tab-nav']}`}>
      <Swiper
        {...TAB_SLIDER_CONFIG}
        onSwiper={setTabSwiper}
        className={`w-full ${styles['tab-swiper']}`}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className={styles['tab-slide']}>
            <button
              className={`flex items-center ${styles['tab-item']} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => onTabClick(index)}
            >
              <div className={`relative ${styles['icon-wrapper']}`}>
                <svg
                  className={`absolute ${styles['icon-circle-bg']}`}
                  viewBox="0 0 56 56"
                >
                  <circle cx="28" cy="28" r="27" />
                </svg>
                <svg
                  className={`absolute ${styles['icon-circle']}`}
                  viewBox="0 0 56 56"
                >
                  <circle cx="28" cy="28" r="27" />
                </svg>
                <img
                  src={slide.tabIcon}
                  alt=""
                  width="32"
                  height="32"
                  loading="eager"
                  decoding="async"
                  className={`absolute ${styles['tab-icon']}`}
                />
              </div>
              <span className={`text-lg font-medium ${styles['tab-label']}`}>
                {slide.tabLabel}
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </nav>
  );
}
