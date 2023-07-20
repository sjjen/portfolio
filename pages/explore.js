import Image from "next/image";
import styles from "../styles/explore.module.css";
import { useState } from "react";
import Setting from "@/components/setting";

export default function Explore() {
  const [imageSrc, setImageSrc] = useState('/homeright.gif');
  const [bkgImage, setBkgImage] = useState('/park.png')
  const [showSetting, setShowSetting] = useState(false);

  // depending on choice, the image src changes
  //NEED 2 CHANGE BKG IMAGES!!!!!! FOR THE OTHERS
  //we're passing these props down to our Setting component
  const handleParkClick = () => {
    setImageSrc('/parkright.gif');
    setBkgImage('/park.png');
  }

  const handleBeachClick = () => {
    setImageSrc('/beachright.gif');
    setBkgImage('/park.png');
  }

  const handleHomeClick = () => {
    setImageSrc('/homeright.gif');
    setBkgImage('/park.png');
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
              src={imageSrc}
              alt="mini me gif"
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
            <button onClick={handleHomeClick}>Chillin' at Home</button>
            <button onClick={handleBeachClick}>Hanging out at the Beach</button>
            <button onClick={handleParkClick}>Picnic at the Park</button>
          </div>
          <p className={styles.footerMessage}>(when you are satisfied with your choice, click me to continue!)</p>
        </div>
      )}
      {showSetting && (
        <Setting imageSrc={imageSrc} bkgImage={bkgImage}/>
      )}
    </>
  );
}
