'use client'
import styles from '../styles/menu.module.css'
import { useRouter } from 'next/navigation';

export default function Menu() {
  const router = useRouter();
  return (
    <nav>Menu
      <ul>
        <li onClick={() => router.push('/')}>HOME</li>
        {/* <li onClick={() => router.push('/explore')}>EXPLORE</li> */}
        <li onClick={() => router.push('/about')}>ABOUT</li>
        <li onClick={() => router.push('/work')}>WORK</li>
        <li onClick={() => router.push('/contact')}>CONTACT</li>
      </ul>
    </nav>
  );
}