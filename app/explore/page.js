'use client'
import Image from "next/image";
import styles from "../styles/explore.module.css";
import { useState } from "react";
import Setting from "@/app/components/setting";
import { useRouter } from "next/router";

/*

-----!! INSTEAD OF PROP DRILLING TO SINGLE PAGE, 
I THINK IT MAY BE BETTER TO CREATE SEPARATE PAGES FOR:
1. HOME
2. PARK
3. BEACH

-----!! ALSO MAKE THE MOVEMENT AS A RESUABLE COMPONENT FOR THE SETTINGS

*/

export default function Explore() {
  // const router = useRouter();

  const [imageSrcR, setImageSrcR] = useState('/homeright.gif');
  const [imageSrcL, setImageSrcL] = useState('/homeleft.gif');

  //NEED TO CHANGE THESE TO THE HOME PROPS-----!!!!!!!
  const [prop1, setProp1] = useState('/parkPicnic.png');
  const [prop2, setProp2] = useState('/parkSit.png');
  const [prop3, setProp3] = useState('/parkWalk.png');

  const [showSetting, setShowSetting] = useState(false);

  // depending on choice, the image src changes
  //NEED 2 CHANGE PROPS FOR BEACH & HOME!!
  //we're passing these props down to our Setting component
  const handleParkClick = () => {
    setImageSrcR('/parkright.gif');
    setImageSrcL('/parkleft.gif');
    setProp1('/parkWalk.png');
    setProp2('/parkPicnic.png');
    setProp3('/parkSit.png');
  }

  const handleBeachClick = () => {
    setImageSrcR('/beachrt.gif');
    setImageSrcL('/beachleft.GIF');
    setProp1('/parkWalk.png');
    setProp2('/parkPicnic.png');
    setProp3('/parkSit.png');
  }

  const handleHomeClick = () => {
    setImageSrcR('/homeright.gif');
    setImageSrcL('/homeleft.gif');
    setProp1('/parkWalk.png');
    setProp2('/parkPicnic.png');
    setProp3('/parkSit.png');
  }

  // to continue exploring, clicking the image
  const handleSelectClick = () => {
    setShowSetting(true);
  }

  return (
    <>
      {!showSetting && (
        <main className={styles.container}>

          <section className={styles.gifContainer}>
            <Image
              src={imageSrcR}
              alt="mini me gif"
              width={400}
              height={400}
              priority
              onClick={handleSelectClick}
              className={styles.selectGif}
            />
            <p class="blurb">
              Wait! <br />
              Before we go explore further, <br />
              These are some of my favorite activities! <br />
              Choose one you also enjoy doing:
              <br />
            </p>
          </section>

          <nav className={styles.buttons}>
            <button onClick={handleHomeClick}>Chillin' at Home</button>
            <button onClick={handleBeachClick}>Hanging out at the Beach</button>
            <button onClick={handleParkClick}>Picnic at the Park</button>
          </nav>

          <footer className={styles.footerMessage}>
            (when you are satisfied with your choice, click me to continue!)
          </footer>

        </main>
      )}
      {showSetting && (
        <Setting imageSrcR={imageSrcR} imageSrcL={imageSrcL} prop1={prop1} prop2={prop2} prop3={prop3}/>
      )}
    </>
  );
}
