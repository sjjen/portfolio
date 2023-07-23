import styles from '../styles/work.module.css'
import Project from '../components/project.js'
import Menu from '../components/menu';

export default function Work() {
  const testObj = {
    title: 'THIS IS A TITLE',
    description: 'blahablababfljf',
    imageSrc: '/beachleft.GIF',
  }

  return (
    <main>
      <Menu />
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