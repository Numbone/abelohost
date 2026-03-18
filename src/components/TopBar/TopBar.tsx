'use client';

import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import styles from './TopBar.module.scss';

export default function TopBar() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <span className={styles.item}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
            </svg>
            +021-95-51-84
          </span>
          <span className={styles.item}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            shop@abelohost.com
          </span>
          <span className={styles.item}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
            </svg>
            1734 Stonecoal Road
          </span>
        </div>
        <div className={styles.authArea}>
          {isAuthenticated() ? (
            <>
              <span className={styles.userName}>
                {user?.firstName} {user?.lastName}
              </span>
              <button onClick={logout} className={styles.authLink}>
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className={styles.authLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
