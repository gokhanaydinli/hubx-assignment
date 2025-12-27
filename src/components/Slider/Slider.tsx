import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import type { Swiper as SwiperType } from 'swiper';

import { SlideContent } from '../SlideContent';
import { PhoneMockup } from '../PhoneMockup';
import { TabNavigation } from '../TabNavigation';
import { slidesData } from '../../data/slides';
import { INITIAL_SLIDE } from '../../constants';
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
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles['slide-inner']}>
          <div className={styles['slide-content-area']}>
            <motion.div
              key={`content-${activeIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
              className={styles['content-wrapper']}
            >
              <SlideContent
                badge={currentSlide.badge}
                title={currentSlide.title}
                description={currentSlide.description}
              />
            </motion.div>

            <div className={styles['phone-container']}>
              <motion.div
                key={`phone-${activeIndex}`}
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.8,
                }}
                className={styles['phone-wrapper']}
              >
                <PhoneMockup
                  imageSrcMobile={currentSlide.phoneImageMobile}
                  imageSrcDesktop={currentSlide.phoneImageDesktop}
                  altText={currentSlide.title}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className={styles['tab-wrapper']}>
          <TabNavigation
            slides={slidesData}
            activeIndex={activeIndex}
            onTabClick={handleTabClick}
          />
        </div>

        <Swiper
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          slidesPerView={1}
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
