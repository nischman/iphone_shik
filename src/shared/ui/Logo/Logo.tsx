import Link from 'next/link';
import styles from './Logo.module.css';
import { OptimizedImage } from '@/components/ui/optimized-image';

export function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <div className={styles.logoImageContainer}>
        <OptimizedImage
          src="/images/image.svg"
          alt="iPhone Shik Logo"
          priority
          className={styles.logoImage}
        />
      </div>
    </Link>
  );
}
