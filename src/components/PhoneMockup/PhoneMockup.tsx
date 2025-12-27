import styles from './PhoneMockup.module.css';

interface PhoneMockupProps {
  imageSrcMobile: string;
  imageSrcDesktop: string;
  altText: string;
}

export function PhoneMockup({
  imageSrcMobile,
  imageSrcDesktop,
  altText,
}: PhoneMockupProps) {
  return (
    <div className={styles['phone-wrapper']}>
      <picture>
        <source media="(min-width: 1024px)" srcSet={imageSrcDesktop} />
        <img
          src={imageSrcMobile}
          alt={altText}
          className={styles['phone-image']}
        />
      </picture>
    </div>
  );
}
