import Image from "next/image";
import styles from "../styles/Heading.module.css";

export default function Heading() {
  return (
    <div className={styles.gifContainer}>
      <Image
        src="/homeright.gif"
        alt="gif for landing page"
        width={400}
        height={400}
        priority
      />
      <p className={styles.blurb}>
        Hey there, I'm Jen. <br />
        Welcome to my interactive portfolio! <br />
        <br />
        You can navigate the site by either clicking the sections you'd like to view or use the '↑ ↓ → ←' keys to move me around!<br />
        <br />
        Enjoy your visit!
      </p>
    </div>
  );
}