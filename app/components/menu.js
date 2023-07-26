'use client';
import styles from '../styles/menu.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuSections = [
    { path: '/', label: 'HOME' },
    // { path: '/explore', label: 'EXPLORE' },
    { path: '/about', label: 'ABOUT' },
    // { path: '/work', label: 'WORK' },
    // { path: '/contact', label: 'CONTACT' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const lineClassNames = [styles.line1, styles.line2, styles.line3];

  return (
    <nav>
      <div className={styles.navbar}>
        <div className={`${styles.container} ${styles.navContainer}`}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={isMenuOpen}
            onChange={toggleMenu}
          />
          <div className={styles.hamburgerLines}>
            {lineClassNames.map((lineClass, index) => (
              <span key={index} className={`${styles.line} ${lineClass}`}></span>
            ))}
          </div>
          
          <div className={`${styles.menuItems} ${isMenuOpen ? styles.open : ''}`}>
            {menuSections.map((section) => (
              <li key={section.path} onClick={closeMenu}>
                <Link href={section.path}>{section.label}</Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

