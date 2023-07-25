'use client'
import styles from '../styles/work.module.css'
import Project from '../components/project.js'
import ProjectDetail from '../components/projectDetail';
import { useState } from 'react';

export default function Work() {
  const [showDetail, setShowDetail] = useState('false');

  const projects = [
    {
      title: "TITLE 1",
      description: "blahablababfljf",
      imageSrc: "/beachleft.gif",
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

  const toggleProjectDetail = () => {
    setShowDetail(!showDetail);
  }

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
