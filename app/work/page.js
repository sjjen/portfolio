import styles from '../styles/work.module.css'
import Project from '../components/project.js'

export default function Work() {
  const testObj = {
    title: 'THIS IS A TITLE',
    description: 'blahablababfljf',
    imageSrc: '/beachleft.GIF',
  }

  return (
    <main>
      <Project testObj={testObj}/>
      <Project testObj={testObj}/>
      <header>Work</header>
      <section>
        <article></article>
        <figure></figure>
      </section>
    </main>
  );
}