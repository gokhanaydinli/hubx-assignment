import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'motion/react';
import type { Swiper as SwiperType } from 'swiper';

import { SlideContent } from '../SlideContent';
import { PhoneMockup } from '../PhoneMockup';
import { TabNavigation } from '../TabNavigation';
import { slidesData } from '../../data/slides';
import { INITIAL_SLIDE, MAIN_SLIDER_CONFIG } from '../../constants';
import styles from './Slider.module.css';

import 'swiper/css';

export function Slider() {
  const [activeIndex, setActiveIndex] = useState(INITIAL_SLIDE);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleTabClick = (index: number) => {
    swiperInstance?.slideTo(index);
    setActiveIndex(index);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  const currentSlide = slidesData[activeIndex];

  return (
    <section
      className={`overflow-hidden flex flex-col justify-center ${styles.section}`}
    >
      <div className={`relative flex flex-col w-full ${styles.container}`}>
        <div className={`flex justify-center w-full ${styles['slide-inner']}`}>
          <div
            className={`flex flex-col w-full ${styles['slide-content-area']}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className={`flex-center ${styles['content-wrapper']}`}
              >
                <SlideContent
                  badge={currentSlide.badge}
                  title={currentSlide.title}
                  description={currentSlide.description}
                  buttonLink={currentSlide.buttonLink}
                  {...(currentSlide.buttonText && {
                    buttonText: currentSlide.buttonText,
                  })}
                />
              </motion.div>
            </AnimatePresence>

            <div
              className={`relative overflow-hidden ${styles['phone-container']}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`phone-${activeIndex}`}
                  initial={{ opacity: 0, y: '100%' }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className={`absolute w-full ${styles['phone-wrapper']}`}
                >
                  <PhoneMockup
                    slideData={currentSlide}
                    animationKey={activeIndex}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className={`relative ${styles['tab-wrapper']}`}>
          <TabNavigation
            slides={slidesData}
            activeIndex={activeIndex}
            onTabClick={handleTabClick}
          />
        </div>

        <Swiper
          {...MAIN_SLIDER_CONFIG}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          className={styles['swiper-hidden']}
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <span>{slide.title}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
