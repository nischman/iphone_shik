import Link from 'next/link';
import styles from './Logo.module.css';

export function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <div className={styles.logoContainer}>
        <div className={styles.logoText}>asiastore</div>
        <div className={styles.appleBadge}>
          <div className={styles.appleIcon}>🍎</div>
          <span className={styles.badgeText}>Authorized Reseller</span>
        </div>
      </div>
    </Link>
  );
}
