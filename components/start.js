import Image from "next/image";
import styles from "../styles/Start.module.css";
import { useState } from "react";
import Explore from "@/pages/explore";

export default function Start() {
  const [imageSrc, setImageSrc] = useState('/homeright.gif');
  const [showExplore, setShowExplore] = useState(false);

  // depending on choice, the image src changes
  const handleParkClick = () => {
    setImageSrc('/parkright.gif');
  }

  const handleBeachClick = () => {
    setImageSrc('/beachright.gif');
  }

  const handleHomeClick = () => {
    setImageSrc('/homeright.gif');
  }

  // to continue exploring, clicking the image
  const handleSelectClick = () => {
    setShowExplore(true);
  }

  return (
    <>
      {!showExplore && (
        <div className={styles.container}>
          <div className={styles.gifContainer}>
            <Image
              src={imageSrc}
              alt="gif for landing page"
              width={400}
              height={400}
              priority
              onClick={handleSelectClick}
            />
            <p className={styles.blurb}>
              Wait! <br />
              Before we go explore further, <br />
              These are some of my favorite activities! <br />
              Choose one you also enjoy doing:<br />
            </p>
          </div>
          <div className={styles.buttons}>
            <button onClick={handleHomeClick} className={styles.button}>Chillin' at Home</button>
            <button onClick={handleBeachClick} className={styles.button}>Hanging out at the Beach</button>
            <button onClick={handleParkClick} className={styles.button}>Picnic at the Park</button>
          </div>
        </div>
      )}
      {showExplore && (
        <Explore imageSrc={imageSrc} />
      )}
    </>
  );
}
