import { SlideData } from '../types';
import { SLIDE_COUNT } from '../constants';
import * as icons from '../assets/icons';
import * as images from '../assets/images';

const rawSlides = [
  {
    badge: 'DOCUMENT SCANNER',
    title: 'Scan with Ease',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
    phoneImageMobile: images.phoneDocumentScannerMobile,
    phoneImageDesktop: images.phoneDocumentScannerDesktop,
    tabIcon: icons.documentScannerIcon,
    tabLabel: 'Document Scanner',
  },
  {
    badge: 'SIGN & STAMP',
    title: 'One-Tap Focus',
    description:
      'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    phoneImageMobile: images.phoneOneTapMobile,
    phoneImageDesktop: images.phoneOneTapDesktop,
    tabIcon: icons.signStampIcon,
    tabLabel: 'Sign & Stamp',
  },
  {
    badge: 'BATCH SCANNING',
    title: 'Multiple Page Scan',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    phoneImageMobile: images.phoneBatchScanningMobile,
    phoneImageDesktop: images.phoneBatchScanningDesktop,
    tabIcon: icons.batchScanningIcon,
    tabLabel: 'Batch Scanning',
  },
  {
    badge: 'ADVANCED FILTERS',
    title: 'Unique Filters',
    description:
      'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    phoneImageMobile: images.phoneUniqueFiltersMobile,
    phoneImageDesktop: images.phoneUniqueFiltersDesktop,
    tabIcon: icons.advancedFiltersIcon,
    tabLabel: 'Advanced Filters',
  },
  {
    badge: 'EXPORT & SHARE',
    title: 'All-Round Conversion',
    description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
    phoneImageMobile: images.phoneExportShareMobile,
    phoneImageDesktop: images.phoneExportShareDesktop,
    tabIcon: icons.exportShareIcon,
    tabLabel: 'Export & Share',
  },
];

export const slidesData: SlideData[] = rawSlides.map((slide, index) => ({
  ...slide,
  id: index,
}));

if (slidesData.length !== SLIDE_COUNT) {
  throw new Error(
    `Expected ${SLIDE_COUNT} slides, but got ${slidesData.length}`,
  );
}
