import Image from "next/image";
import { useState, useEffect } from 'react';
import styles from '../styles/setting.module.css';

export default function Setting(props) {
  const imageSrcR = props.imageSrcR;
  const imageSrcL = props.imageSrcL;

  const [position, setPosition] = useState({ x: 70, y: 70 });
  const [imageSrc, setImageSrc] = useState(imageSrcL);

  const distance = 4; // Distance to move the GIF on each arrow key press

  // Move the gif around on keyup event
  useEffect(() => {
    const handleKeyPress = (e) => {
      const { keyCode } = e;

      let updatedPosition = { ...position };

      const gifWidth = 25; // Set the width of the gif container in percentage
      const gifHeight = 25; // Set the height of the gif container in percentage

      // Calculate the boundaries based on screen size
      const maxX = 100 - gifWidth;
      const maxY = 100 - gifHeight;
      const minX = 0;
      const minY = 0;

      if (keyCode === 37) {
        // Left arrow key
        updatedPosition.x = Math.max(
          updatedPosition.x - distance,
          minX
        );
      } else if (keyCode === 39) {
        // Right arrow key
        updatedPosition.x = Math.min(
          updatedPosition.x + distance,
          maxX
        );
      } else if (keyCode === 38) {
        // Up arrow key
        updatedPosition.y = Math.max(
          updatedPosition.y - distance,
          minY
        );
      } else if (keyCode === 40) {
        // Down arrow key
        updatedPosition.y = Math.min(
          updatedPosition.y + distance,
          maxY
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

  // Change L vs R gif on keydown event going left/right
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
    <>
      {/* div boundary for the gif to stay within the screen */}
      <div className={styles.gifBoundary}>
        {/* div container for the gif to keep the size responsive */}
        <div
          className={styles.responsiveGif}
          style={{
            position: "relative",
            left: `${position.x}%`, // Use percentage-based units for positioning
            top: `${position.y}%`, // Use percentage-based units for positioning
            width: "25%", // Set the width of the container
            height: "25%", // Set the height of the container
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
      </div>
      {/* the interactive components for the gif */}
      <div className={styles.buttons}>
        {/* Buttons with updated positions */}
        <button className="sectionButton">ABOUT</button>
        <button className="sectionButton">EXPERIENCE<br />+ PROJECTS</button>
        <button className="sectionButton">RESUME</button>
      </div>
    </>
  );
}