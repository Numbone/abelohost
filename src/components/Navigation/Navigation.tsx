'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.scss';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Hot Deals', href: '/' },
  { label: 'Categories', href: '/' },
  { label: 'Laptops', href: '/' },
  { label: 'Smartphones', href: '/' },
  { label: 'Cameras', href: '/' },
  { label: 'Accessories', href: '/' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className={styles.link} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
