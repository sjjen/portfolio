'use client'
import styles from '../styles/menu.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const menuSections = [
    { path: '/', label: 'HOME' },
    // { path: '/explore', label: 'EXPLORE' },
    { path: '/about', label: 'ABOUT' },
    { path: '/work', label: 'WORK' },
    // { path: '/contact', label: 'CONTACT' },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.menuContainer}>
      <div className={`${styles.menuIcon} ${showMenu ? styles.open : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.menuItems} ${showMenu ? styles.show : ''}`}>
        {menuSections.map((section) => (
          <li key={section.path}>
            <Link href={section.path}>{section.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
