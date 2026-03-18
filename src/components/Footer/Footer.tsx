'use client';

import { useAuthStore } from '@/store/authStore';
import styles from './Footer.module.scss';

export default function Footer() {
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.year}>&copy; {currentYear}</span>
        {isAuthenticated() && (
          <span className={styles.logged}>Logged as {user?.email}</span>
        )}
      </div>
    </footer>
  );
}
