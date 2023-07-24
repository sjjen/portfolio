import styles from '../styles/project.module.css'
import Image from 'next/image';

export default function Project(props) {
  const title = props.projects.title;
  const description = props.projects.description;
  const imageSrc = props.projects.imageSrc;

  return (
    <main>
      <section className={styles.projectContainer}>
        <heading>{title}</heading>
        <p>{description}</p>
        <Image
            src={imageSrc}
            alt="pic of me"
            width={400}
            height={400}
            priority
          />
      </section>
    </main>
  );
}