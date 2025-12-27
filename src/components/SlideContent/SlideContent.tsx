import styles from './SlideContent.module.css';

interface SlideContentProps {
  badge: string;
  title: string;
  description: string;
}

export function SlideContent({ badge, title, description }: SlideContentProps) {
  return (
    <div className={styles.content}>
      <span className={styles.badge}>{badge}</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <button className={styles.button}>Learn More</button>
    </div>
  );
}
