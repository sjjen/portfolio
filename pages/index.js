'use client'
import styles from '../styles/index.module.css'
import Heading from '@/components/heading'
import { useState } from 'react'
import { useRouter } from 'next/router';

export default function Home() {
  const [showButton, setShowButton] = useState(true);
  const router = useRouter(); // Initialize the useRouter hook


  // Change the state to begin the game once the button is clicked & remove the button
  const handleClick = () => {
    setShowButton(false);
    // Navigate to the desired page when the button is clicked
    router.push('/explore'); // Replace '/another-page' with the path of the page you want to navigate to
  }

  return (
    <main className={styles.main}>
      <Heading />
      <div className={styles.buttonContainer}>
        {showButton && <button onClick={handleClick}>Let's Go!</button>}
      </div>
    </main>
  )
}
