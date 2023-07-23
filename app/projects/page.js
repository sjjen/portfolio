import styles from '../styles/projects.module.css'
import { useRouter } from 'next/router';

export default function Projects() {
  const router = useRouter();
  //put into click function
  // router.push('/PAGE')

  return (
    <main>
      <header>Projects</header>
      <section>
        <article></article>
        <figure></figure>
      </section>
    </main>
  );
}