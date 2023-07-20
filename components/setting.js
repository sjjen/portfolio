import Image from "next/image";
import styles from '../styles/setting.module.css';

export default function Setting(props) {
  const imageSrc = props.imageSrc;
  const bkgImage = props.bkgImage;

  return (
    <div className={styles.background} style={{ backgroundImage: `url(${bkgImage})` }}>
      <div className={styles.responsiveGif}>
        <Image
          src={imageSrc}
          alt="mini me gif"
          layout="fill" /* Make the image fill its parent container */
          objectFit="contain" /* Adjust the objectFit to your needs (e.g., "cover", "contain") */
          objectPosition="center center" /* Adjust the objectPosition if needed */
          priority
        />
      </div>
      <h1>HEY!!</h1>
    </div>
  );
}
