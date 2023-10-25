'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';
import Link from 'next/link';
import { HiXMark, HiBars3BottomRight } from 'react-icons/hi2';

export default function Header() {
  const pathName = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <header className={styles.headerComponent}>
      <nav className={styles.navComponent}>
        <Link href="/">
          <span
            className={styles.brandName}
            onClick={() => (open ? setOpen(!open) : '')}
          >
            MundoDev
          </span>
        </Link>
        <span className={styles.menuIcons} onClick={() => setOpen(!open)}>
          {!open ? <HiBars3BottomRight /> : <HiXMark />}
        </span>
        <ul className={styles.navMenu}>
          <Link href="/">
            <li
              className={
                pathName === '/' ? `${styles.navLinksActive}` : styles.navLinks
              }
            >
              Home
            </li>
          </Link>
          <Link href="/posts">
            <li
              className={
                pathName === '/posts'
                  ? `${styles.navLinksActive}`
                  : styles.navLinks
              }
            >
              Posts
            </li>
          </Link>
        </ul>
      </nav>
      {open && (
        <ul className={styles.navMenuExpanded}>
          <Link href="/">
            <li
              className={
                pathName === '/'
                  ? `${styles.navMenuExpandedActive}`
                  : styles.navMenuExpanded
              }
            >
              Home
            </li>
          </Link>
          <Link href="/posts">
            <li
              className={
                pathName === '/posts'
                  ? `${styles.navMenuExpandedActive}`
                  : styles.navMenuExpanded
              }
            >
              Posts
            </li>
          </Link>
        </ul>
      )}
    </header>
  );
}
