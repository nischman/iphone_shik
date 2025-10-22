import Link from 'next/link';
import './Logo.scss';
import { OptimizedImage } from '@/components/ui/optimized-image';

export function Logo() {
  return (
    <Link href="/" className="logo">
      <div className="logoImageContainer">
        <OptimizedImage
          src="images/logo.svg"
          alt="iPhone Shik Logo"
          priority
          className="logoImage"
        />
      </div>
    </Link>
  );
}
