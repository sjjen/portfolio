import Image from "next/image";
import styles from "../styles/explore.module.css";
import { useState } from "react";
import Setting from "@/components/setting";

export default function Explore() {
  const [imageSrcR, setImageSrcR] = useState('/homeright.gif');
  const [imageSrcL, setImageSrcL] = useState('/homeleft.gif');
  const [showSetting, setShowSetting] = useState(false);

  // depending on choice, the image src changes
  //NEED 2 CHANGE BKG IMAGES!!!!!! FOR THE OTHERS
  //we're passing these props down to our Setting component
  const handleParkClick = () => {
    setImageSrcR('/parkright.gif');
    setImageSrcL('/parkleft.gif');
  }

  const handleBeachClick = () => {
    setImageSrcR('/beachright.gif');
    setImageSrcL('/beachleft.GIF');
  }

  const handleHomeClick = () => {
    setImageSrcR('/homeright.gif');
    setImageSrcL('/homeleft.gif');
  }

  // to continue exploring, clicking the image
  const handleSelectClick = () => {
    setShowSetting(true);
  }

  return (
    <>
      {!showSetting && (
        <div className={styles.container}>
          <div className={styles.gifContainer}>
            <Image
              src={imageSrcR}
              alt="mini me gif"
              width={400}
              height={400}
              priority
              onClick={handleSelectClick}
              className={styles.selectGif}
            />
            <p class='blurb'>
              Wait! <br />
              Before we go explore further, <br />
              These are some of my favorite activities! <br />
              Choose one you also enjoy doing:<br />
            </p>
          </div>
          <div className={styles.buttons}>
            <button onClick={handleHomeClick}>Chillin' at Home</button>
            <button onClick={handleBeachClick}>Hanging out at the Beach</button>
            <button onClick={handleParkClick}>Picnic at the Park</button>
          </div>
          <p className={styles.footerMessage}>(when you are satisfied with your choice, click me to continue!)</p>
        </div>
      )}
      {showSetting && (
        <Setting imageSrcR={imageSrcR} imageSrcL={imageSrcL}/>
      )}
    </>
  );
}
