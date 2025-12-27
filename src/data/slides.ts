import { SlideData } from '../types';
import * as icons from '../assets/icons';
import * as images from '../assets/images';

export const slidesData: SlideData[] = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    badge: 'EXPORT & SHARE',
    title: 'All-Round Conversion',
    description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
    phoneImageMobile: images.phoneExportShareMobile,
    phoneImageDesktop: images.phoneExportShareDesktop,
    tabIcon: icons.exportShareIcon,
    tabLabel: 'Export & Share',
  },
];
