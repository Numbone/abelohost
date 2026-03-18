import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Abelohost Shop<span className={styles.dot}>.</span>
        </Link>
        <div className={styles.banner}>
          <span>600 x 70</span>
        </div>
      </div>
      <div className={styles.accent} />
    </header>
  );
}
