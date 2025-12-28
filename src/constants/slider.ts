import type { SwiperOptions } from 'swiper/types';

export const SLIDE_COUNT = 5;
export const INITIAL_SLIDE = 0;

export const DEFAULT_BUTTON_LINK = 'https://hubx.co/';
export const DEFAULT_BUTTON_TEXT = 'Learn More';

// Slider Configurations
export const MAIN_SLIDER_CONFIG: SwiperOptions = {
  slidesPerView: 1,
  speed: 0,
  allowTouchMove: false,
};

export const TAB_SLIDER_CONFIG: SwiperOptions = {
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
  centeredSlidesBounds: true,
  grabCursor: true,
  initialSlide: INITIAL_SLIDE,
  speed: 400,
  touchRatio: 0.7,
  resistance: true,
  resistanceRatio: 0.3,
  freeMode: false,
  longSwipesRatio: 0.3,
  longSwipesMs: 200,
};
