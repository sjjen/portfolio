import styles from '../styles/project.module.css'
import Image from 'next/image';

export default function Project(props) {
  const title = props.testObj.title;
  const description = props.testObj.description;
  const imageSrc = props.testObj.imageSrc;

  return (
    <main>
      <section>
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