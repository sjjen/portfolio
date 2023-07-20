'use client'
import styles from '../styles/index.module.css'
import Heading from '@/components/heading'
import Start from '@/components/start'
import { useState } from 'react'

export default function Home() {

  const [rendered, setRendered] = useState('heading');
  const [showButton, setShowButton] = useState(true);
  
  //either render the header component or start the game
  const renderedComponent = () => {
    if (rendered === 'heading') {
      return <Heading />;
    } else if (rendered === 'start') {
      return <Start />;
    } else {
      return null;
    }
  }

  //change the state to begin the game once button is clicked & remove button
  const handleClick = () => {
    setRendered('start');
    setShowButton(!showButton);
  }

  return (
    <main className={styles.main}>
      {renderedComponent()}
      <div className={styles.buttonContainer}>
        {showButton && <button onClick={() => handleClick()} className={styles.button}>Let's Go!</button>}
      </div>
    </main>
  )
}

