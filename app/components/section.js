import styles from '../styles/section.module.css'
import Image from 'next/image';

export default function Section(props) {

  const { section, content } = props.resume;
  

  return (
    <main>
      <section className={styles.projectContainer}>
        <heading>{section}</heading>
        <p>{content}</p>
        {/* <Image
            src={imageSrc}
            alt="pic of me"
            width={400}
            height={400}
            // layout='responsive'
            priority
          /> */}
      </section>
    </main>
  );
}