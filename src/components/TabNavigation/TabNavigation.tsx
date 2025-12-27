import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './TabNavigation.module.css';
import { SlideData } from '../../types';

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
  return (
    <nav className={styles['tab-nav']}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={0}
        centeredSlides={true}
        centeredSlidesBounds={true}
        grabCursor={true}
        initialSlide={0}
        speed={800}
        touchRatio={0.8}
        resistance={true}
        resistanceRatio={0.5}
        className={styles['tab-swiper']}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className={styles['tab-slide']}>
            <button
              className={`${styles['tab-item']} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => onTabClick(index)}
            >
              <div className={styles['icon-wrapper']}>
                <svg className={styles['icon-circle-bg']} viewBox="0 0 56 56">
                  <circle cx="28" cy="28" r="27" />
                </svg>
                <svg className={styles['icon-circle']} viewBox="0 0 56 56">
                  <circle cx="28" cy="28" r="27" />
                </svg>
                <img
                  src={slide.tabIcon}
                  alt=""
                  className={styles['tab-icon']}
                />
              </div>
              <span className={styles['tab-label']}>{slide.tabLabel}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </nav>
  );
}
