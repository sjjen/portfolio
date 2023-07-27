'use client'
import styles from '../styles/work.module.css'
import Project from '../components/project.js'
import ProjectDetail from '../components/projectDetail';
import { useState } from 'react';

export default function Work() {
  const [showDetail, setShowDetail] = useState('false');

  const projects = [
    {
      title: "Svelvet v7.0",
      description: "Svelte component library for creating node-based interfaces",
      imageSrc: "/svelvetlogo.png",
    },
    {
      title: "JobSpot",
      description: "Dashboard for easily tracking job applications",
      imageSrc: "/jobspotLogo.png",
    },
    {
      title: "Moody",
      description: "Color-based mood tracking and journaling application",
      imageSrc: "/svelvetlogo.png",
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
