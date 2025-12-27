import type { SwiperOptions } from 'swiper/types';
import { INITIAL_SLIDE } from './slider';

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
