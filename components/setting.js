import Image from "next/image";
import { useState, useEffect } from 'react';
import styles from '../styles/setting.module.css';

export default function Setting(props) {

  const imageSrcR = props.imageSrcR;
  const imageSrcL = props.imageSrcL;
  const bkgImage = props.bkgImage;

  const [position, setPosition] = useState({ x: 45, y: 30 });
  const [imageSrc, setImageSrc] = useState(imageSrcR);

  //move the gif around on keyup event
  useEffect(() => {
    const handleKeyPress = (e) => {
      const { keyCode } = e;
      const distance = 2;

      let updatedPosition = { ...position };

      if (keyCode === 37) {
        // Left arrow key
        updatedPosition.x = Math.max(
          updatedPosition.x - distance,
          0, // Limit the leftmost position to 0
        );
      } else if (keyCode === 39) {
        // Right arrow key
        updatedPosition.x = Math.min(
          updatedPosition.x + distance,
          100, // Limit the rightmost position based on the screen width
        );
      } else if (keyCode === 38) {
        // Up arrow key
        updatedPosition.y = Math.max(
          updatedPosition.y - distance,
          0, // Limit the topmost position to 0
        );
      } else if (keyCode === 40) {
        // Down arrow key
        updatedPosition.y = Math.min(
          updatedPosition.y + distance,
          100, // Limit the bottommost position based on the screen height
        );
      }

      setPosition(updatedPosition);
      e.preventDefault(); // Prevent default arrow key behavior (scrolling)
    };

    window.addEventListener("keyup", handleKeyPress);

    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, [position]);

  //change L vs R gif on keydown event going left/right
  useEffect(() => {
    const handleKeyDown = (e) => {
      const { keyCode } = e;

      if (keyCode === 37) {
        // Left arrow key
        e.preventDefault();
        setImageSrc(imageSrcL);
      } else if (keyCode === 39) {
        // Right arrow key
        e.preventDefault();
        setImageSrc(imageSrcR);
      } else if (keyCode === 38 || keyCode === 40) {
        // Up or down arrow key
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageSrcL, imageSrcR]);

  return (
    // 1 div) for background image
    <div
      className={`${styles.background} ${styles.gradientBorder}`}
      style={{ backgroundImage: `url(${bkgImage})` }}
    >
      {/* 2 div) container for  the gif to keep the size responsive*/}
      <div
        className={styles.responsiveGif}
        style={{
          position: "relative",
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
      >
        <Image
          src={imageSrc}
          alt="mini me gif"
          layout="fill"
          objectFit="contain"
          objectPosition="center center"
          priority
        />
      </div>
      <h1>HEY!!</h1>
    </div>
  );
}
