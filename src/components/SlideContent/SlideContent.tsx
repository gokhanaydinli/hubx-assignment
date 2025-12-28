import { DEFAULT_BUTTON_TEXT } from '../../constants';
import styles from './SlideContent.module.css';

interface SlideContentProps {
  badge: string;
  title: string;
  description: string;
  buttonLink: string;
  buttonText?: string;
}

export function SlideContent({
  badge,
  title,
  description,
  buttonLink,
  buttonText = DEFAULT_BUTTON_TEXT,
}: SlideContentProps) {
  return (
    <div
      className={`flex flex-col gap-4 items-center desktop-items-end w-full text-center ${styles.content}`}
    >
      <span
        className={`text-base font-extrabold text-center uppercase ${styles.badge}`}
      >
        {badge}
      </span>
      <h2
        className={`text-xl font-bold text-center desktop-text-right ${styles.title}`}
      >
        {title}
      </h2>
      <p
        className={`text-sm desktop-text-20 font-normal text-center desktop-text-right ${styles.description}`}
      >
        {description}
      </p>
      <a
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-base desktop-text-20 font-normal text-center ${styles.button}`}
      >
        {buttonText}
      </a>
    </div>
  );
}
