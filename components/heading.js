import Image from "next/image";
import styles from "../styles/heading.module.css";

export default function Heading() {
  return (
    <div className={styles.gifContainer}>
      <Image
        src="/homeright.gif"
        alt="mini me gif"
        width={400}
        height={400}
        priority
      />
      <p class='blurb'>
        Hey there, I'm Jen. <br />
        Welcome to my interactive portfolio! <br />
        <br />
        Click the button below to get started<br /><br />
        Enjoy your visit!
      </p>
    </div>
  );
}