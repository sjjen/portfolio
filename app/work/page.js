import styles from '../styles/work.module.css'
import Project from '../components/project.js'

export default function Work() {
  const projects = [
    {
      title: "TITLE 1",
      description: "blahablababfljf",
      imageSrc: "/beachleft.GIF",
    },
    {
      title: "TITLE 2",
      description: "blahablababffksfjsdfjdsfjjkfsjkfljf",
      imageSrc: "/parkleft.gif",
    },
    {
      title: "TITLE 3",
      description: "blahablababffksfjsdfjdsfjjkfsjkfljf",
      imageSrc: "/homeleft.gif",
    },
  ];

  return (
    <main className={styles.main}>
      <header className={styles.heading}>Projects</header>
      <section className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <Project key={index} projects={project} />
        ))}
      </section>
    </main>
  );
}
